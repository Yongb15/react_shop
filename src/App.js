import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="#home"className="brand-padding">집가구싶엉</Navbar.Brand>
          <div className="flex-spacer"></div>
          <Nav className="me-auto custom-nav">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
