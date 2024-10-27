import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function EducationInfoForm({ show, onHide, onSave }) {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newEducation = {
      degree,
      institution,
      from,
      to,
      description,
    };
    onSave(newEducation); // Pass the new education entry to parent component
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="degree">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="institution">
                    <Form.Label>Institution</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Institution"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    />
                </Form.Group>
                <div className="row">
                    <Form.Group className="mb-3 col-md-6" controlId="date-from">
                    <Form.Label>From</Form.Label>
                    <Form.Control
                        type="date"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6" controlId="date-to">
                    <Form.Label>To</Form.Label>
                    <Form.Control
                        type="date"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="education-description">
                    <Form.Label>Description</Form.Label>
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
  );
}

export default EducationInfoForm;
