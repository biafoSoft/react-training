import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function Contact({show, onHide, onSave}) {
    const [gmail, setGmail]= useState("");
    const [phone, setPhone]= useState("");
    const [linkedIn, setLinkedIn]= useState("");
    const [github, setGithub]= useState("");


    const handleSave= ()=>{
      const newContact={
        gmail,
        phone,
        linkedIn,
        github
      }
      onSave(newContact);
    }
    return (
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Contact Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3 " controlId="gmail">
                          <Form.Label>Gmail</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="name@gmail.com"
                          value={gmail}
                          onChange={(e) => setGmail(e.target.value)}
                          />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="03xxxxxxxxx"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          />
              </Form.Group>
              <Form.Group className="mb-3" controlId="linkedIn">
                          <Form.Label>LinkedIn</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="LinkedIn Profile"
                          value={linkedIn}
                          onChange={(e) => setLinkedIn(e.target.value)}
                          />
              </Form.Group>
              <Form.Group className="mb-3" controlId="github">
                          <Form.Label>GitHub</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="Github Profile"
                          value={github}
                          onChange={(e) => setGithub(e.target.value)}
                          />
              </Form.Group>
          </Form>
          <div className="d-flex justify-content-between pb-3 pt-2">
              <Button variant="secondary" onClick={onHide}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}> Save Changes</Button>
              
          </div>
          </Modal.Body>
          
        
      </Modal>
  )
}

export default Contact;