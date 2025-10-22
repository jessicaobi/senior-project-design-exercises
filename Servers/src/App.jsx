import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'


function App() {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


// axios.get('http://localhost:3001/persons').then(response => {
//   const persons = response.data
//   console.log(persons)
// })
  return (
    <>
      
    </>
  )
}

export default App
