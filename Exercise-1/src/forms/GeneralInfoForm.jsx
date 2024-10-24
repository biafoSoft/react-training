import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
function GeneralInfoForm({show, onHide, onSave}) {
    const [name, setName]= useState("");
    const [designation, setDsignation] = useState("");
    const [description, setDescription] = useState("");

    const handleSave=()=>{
        onSave({name, designation, description});
        
    }
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
        
        <Modal.Header closeButton>
            <Modal.Title>Add About Yourself</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Designation(Software Engineer)"
                    value={designation}
                    onChange={(e) => setDsignation(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Profile Description</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
            </Form>

            <div className="d-flex justify-content-between pb-3 pt-2">
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </div>

        </Modal.Body>
    </Modal>
  )
}

export default GeneralInfoForm