import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="page-background">
      <div className="main-box">
        <Navbar bg="light" variant="light" className="custom-navbar">
          <Container className="zigzag-container">
            <Navbar.Brand href="#home">집가구싶엉</Navbar.Brand>
            <Nav className="menu">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* 여기 아래로 너 원하는 콘텐츠 추가하면 돼 */}
        <div style={{ padding: '2rem' }}>
          <h2>메인 콘텐츠 영역</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
