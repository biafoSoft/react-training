
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
// eslint-disable-next-line react/prop-types
function CertificatesForm({show, onHide, onSave}) {
    const [cert, setCert]= useState("");
    const [source, setSource]= useState("");

    const handleSave= ()=>{
      const newCerts={
       cert,
       source
      }
      onSave(newCerts);
    }
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Certifications</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3 " controlId="cert">
                          <Form.Label>Certification Name</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="Certificate Description"
                          value={cert}
                          onChange={(e) => setCert(e.target.value)}
                          />
              </Form.Group>
              <Form.Group className="mb-3" controlId="issuer">
                          <Form.Label>Issuer</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="Issuer Name"
                          value={source}
                          onChange={(e) => setSource(e.target.value)}
                          />
              </Form.Group>
          </Form>
          <div className="d-flex justify-content-between pb-3 pt-2">
              <Button variant="secondary" onClick={onHide}>
                  Discard
                </Button>
                <Button variant="primary" onClick={handleSave}> Save Changes</Button>
              
          </div>
          </Modal.Body>
          
        
      </Modal>
  )
}

export default CertificatesForm