import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';


function RowSelection () {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])

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
    //   const bbb=()=>{
    //     alert('asrdf')
    //   }
    const firstPageRows = users.slice(0, 10)
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
              {firstPageRows.map((value) => {
              return (
                <tr key={value.id}>
                  <td >{value.name}</td>
                  <td>{value.capital}</td>
                  <td>{value.region}</td>
                  <td>{value.subregion}</td>
                  <td>{value.population}</td>
                  <td>{value.area}</td>
                  <td>{value.nativeName}</td>
                  <td><img src={value.flag} alt="none" style={{width:"50px"}}/></td>
                  {/* <td>{value.currencies}</td> */}
                  {/* <td>{value.topLevelDomain}</td> */}
                  {/* <td>{value.alpha2Code}</td> */}
                  {/* <td>{value.alpha3Code}</td> */}
                  {/* <td>{value.callingCodes}</td> */}
                  {/* <td>{value.altSpellings}</td> */}
                  {/* <td>{value.latlng}</td> */}
                  {/* <td>{value.demonym}</td> */}
                  {/* <td>{value.gini}</td> */}
                  {/* <td>{value.timezones}</td> */}
                  {/* <td>{value.borders}</td> */}
                  {/* <td>{value.numericCode}</td> */}
                  {/* <td>{value.languages}</td> */}
                  {/* <td>{value.translations}</td> */}
                  {/* <td>{value.regionalBlocs}</td> */}
                  {/* <td>{value.cioc}</td> */}
                </tr>
                )
              })}
            </tbody>
          </Table>
        
        </div>
    )
}

export default RowSelection
