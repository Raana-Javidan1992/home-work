import React, {useState, useEffect} from 'react'

function Test () {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getData = async () =>{
          const usersData =  await fetchWeater()
          setUsers(usersData)
        }   
        getData()   
      }, [])
      const fetchWeater = async () =>{
        const res = await fetch('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=6330a09c54f1e4853ef0e9d49f2c9fe8');
        const data = await res.json()
        setData(JSON.stringify(data))
        return data
      }
    return (
        <div>
            {data}  
        </div>
    )
}
export default Test



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