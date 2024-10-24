import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function ProjectsForm({ show, onHide, onSave }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSave = () => {
        const newProject = {
            title,
            description
        };
        onSave(newProject);
        setTitle(""); 
        setDescription(""); 
        onHide(); 
    };

    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="projectTitle">
                        <Form.Label>Project Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter project title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="projectDescription">
                        <Form.Label>Project Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter project description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Discard
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProjectsForm;
