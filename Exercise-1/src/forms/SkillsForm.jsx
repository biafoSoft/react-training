import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
function SkillsForm({show, onHide, onSave}) {
    const [newSkill,setNewSkill]=useState("");

    const handleSave=()=>{
        onSave(newSkill);
        setNewSkill("");
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
                    <Form.Label>Add Skills</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Skiils"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    />
                </Form.Group>
            </Form>

            <div className="d-flex justify-content-between pb-3 pt-2">
                <Button variant="secondary" onClick={onHide}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>Add</Button>
            </div>
        </Modal.Body>
        
        
      
    </Modal>
  )
}

export default SkillsForm;