//import hooks from react
import { useEffect, useState } from 'react'
//import Person component
import Menu from './components/Menu'
import Person from './components/Person'
//Bootstrap
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

export default function App() {
  //create a state variable to store json in data from persons.json
  const [persons, setPersons] = useState([]);

  //if you call useEffect with your own function as first parameter and an empty array as the second one
  //your function will run only when component mounts
  useEffect(async () => {
    //run this code when App is mounted
    //a good opportunity to fetch data or load files in general
    //convert the raw data from json to a JS data structure
    //and assign it to the persons variable
    let jsonData = await (await fetch('/json/persons.json')).json();
    setPersons(jsonData);
  }, []);

  return (
    <>
      <Container>
        <Menu {...{ setPersons, persons }} />
        <Table striped hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Postal Code</th>
              <th>City</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) =>
              <Person
                key={index}
                {...{ ...person, setPersons, persons, person, index }}
              />
            )}
          </tbody>
        </Table>
      </Container>
    </>
  )
}
