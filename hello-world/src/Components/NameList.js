import React from 'react'
import Person from './Person'
function NameList() { 

    const names = ['Bruce', 'Banner', 'Loki', 'Bruce']

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
  // return (
  //   <div>
  //     {
  //       persons.map(person => <h2>I am {person.name}. My ID is {person.id}</h2>)
  //     }
  //   </div>
  // )

    
      //const personsList = persons.map(person => <Person key = {person.id} person = {person.name}></Person>)
      const nameList = names.map((name, index) => <h2 key={index}> {index} {name}</h2>)
      return <div> {nameList} </div>
}

export default NameList
