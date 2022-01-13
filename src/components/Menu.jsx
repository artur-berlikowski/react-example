//Bootstrap
import Nav from 'react-bootstrap/Nav'

export default function Menu(props) {
  let { setPersons, persons } = props;

  const sort = (eventKey) => {
    switch (eventKey) {
      case "firstName": persons.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
        break;
      case "lastName": persons.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
        break;
      case "address": persons.sort((a, b) => (a.address > b.address) ? 1 : -1);
        break;
      case "city": persons.sort((a, b) => (a.city > b.city) ? 1 : -1);
        break;
      case "gender": persons.sort((a, b) => (a.gender > b.gender) ? 1 : -1);
        break;
    }
    setPersons([...persons]);
  }

  return (

    <Nav id="menu_sort" variant="pills" onSelect={sort}>
      <Nav.Item><Nav.Link disabled="true">Sort By</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="firstName">First Name</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="lastName">Last Name</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="address">Address</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="city">City</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link eventKey="gender">Gender</Nav.Link></Nav.Item>
    </Nav >
  )
}