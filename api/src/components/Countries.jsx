import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';


function Countries () {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [weather, setWeather] = useState(false)

    useEffect(() => {
        const getData = async () =>{
          const usersData =  await fetchData()
          setUsers(usersData)
        }   
        getData()   
      }, [])
  
      const fetchData = async () =>{
        const res = await fetch('https://restcountries.eu/rest/v2/');
        const data = await res.json()
        setData(data);
        var mapData = []
        data.map( (object, i) => {
          mapData.push(<p key={i}>{object}</p>)
        })    
        return data
      }
      const fetchWeater = async () =>{
        const res = await fetch('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=6330a09c54f1e4853ef0e9d49f2c9fe8');
        const data = await res.json()
        setData(JSON.stringify(data))
        return data
        setWeather(true)
      }
   
    return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>name</th>
                <th>capital</th>
                <th>region</th>
                <th>subregion</th>
                <th>population</th>
                <th>area</th>
                <th>nativeName</th>
                <th>flag</th>
              </tr>
            </thead>
            <tbody>
              {users.map((value) => {
              return (
                <tr key={value.id}>
                  <td >{value.name}</td>
                  <td onClick={fetchWeater}>{weather? value.capital: data}</td>
                  <td>{value.region}</td>
                  <td>{value.subregion}</td>
                  <td>{value.population}</td>
                  <td>{value.area}</td>
                  <td>{value.nativeName}</td>
                  <td><img src={value.flag} alt="none" style={{width:"50px"}}/></td>
          
                </tr>
                )
              })}
            </tbody>
          </Table>
        
        </div>
    )
}

export default Countries
