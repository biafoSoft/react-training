import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function InterestsForm({show, onHide, onSave}) {
    const [newInterest,setNewInterest]=useState("");

    const handleSave=()=>{
        onSave(newInterest);
        setNewInterest("");
        onHide();
    }
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
            <Modal.Title closeButton>Add Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                    type="text"
                    placeholder="Interests"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    />
                </Form.Group>
            </Form>

            <div className="d-flex justify-content-between pb-3 pt-2">
                <Button
                 variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>Add</Button>
            </div>
        </Modal.Body>
        
        
      
    </Modal>
  )
}

export default InterestsForm