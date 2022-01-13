//Bootstrap
import Button from 'react-bootstrap/Button'

export default function Person(props) {
  let { firstName, lastName, address, postalCode, city, gender, setPersons, persons, person, index } = props

  function remove() {
    //Target the person with the help of index prop and remove it from props by using splice
    persons.splice(index, index + 1)
    //Update persons with the persons array after the person is removed
    setPersons([...persons])
  }

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{postalCode}</td>
      <td>{city}</td>
      <td>{gender}</td>
      <td><Button id="button_remove" onClick={remove} /></td>
    </tr>
  )
}