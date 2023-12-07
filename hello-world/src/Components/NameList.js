import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
      {
        id: 1,
        name: 'Dhruv'
      },
      {
        id: 2,
        name: 'Stark'
      },
      {
        id: 3,
        name: 'Steve'
      }
    ]
    const names = ['A', 'B', 'C']
  // return (
  //   <div>
  //     {
  //       persons.map(person => <h2>I am {person.name}. My ID is {person.id}</h2>)
  //     }
  //   </div>
  // )

    
      const personsList = persons.map(person => <Person key = {person.id} person = {person}></Person>)
      return <div> {personsList} </div>
}

export default NameList
