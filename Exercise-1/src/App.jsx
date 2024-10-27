
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import General from './components/General'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Interests from './components/Interests'
import ExperienceForm from './forms/ExperienceForm'

function App() {
  return(
    <>
      <General/>
      <Contact/>
      <ExperienceForm/>
      <Container className='mb-4'>
        <Row className='gap-2'>
          <Col lg={6}>
            <Education/>
            <Experience/>
          </Col>
          <Col lg={5}>
            <Skills/>
            <Projects/>
            <Certificates/>
            <Interests/>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App
