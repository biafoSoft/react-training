import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function EducationInfoForm({ show, onHide, onSave }) {
  const [degree, setDegree] = useState("");
  const [Institution, setInstitution] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [gpa, setgpa] = useState("");
 

  const handleSave = () => {
    const newExperience = {
      degree,
      Institution,
      from,
      to,
      gpa,
      
    };
    onSave(newExperience); // Pass the new experience to parent component
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
            <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Degree Title</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Degree Title"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    />
                </Form.Group>
                
                        <Form.Group className="mb-3" controlId="institude-name">
                            <Form.Label>Institute Name</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Degree Specification"
                            value={Institution}
                            onChange={(e) => setInstitution(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="gpa">
                            <Form.Label>CGPA/Percentage</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Total Scores"
                            value={gpa}
                            onChange={(e) => setgpa(e.target.value)}
                            />
                        </Form.Group>
                
                <div className="row">
                    <Form.Group className="mb-3 col-md-6" controlId="date-from">
                    <Form.Label>Date From</Form.Label>
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
