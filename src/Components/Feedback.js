import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feedback.css";

const Feedback = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedVilla, setSelectedVilla] = useState("");
  const [stage, setStage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedProject, selectedVilla, stage });
  };

  return (
    <div className="feedback-container">
      <h2 className="form-title">Feedback Form</h2>
      <Form onSubmit={handleSubmit} className="feedback-form">
        <Form.Group className="mb-3">
          <Form.Label>Select Project</Form.Label>
          <Form.Select
            className="custom-dropdown"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Villa</Form.Label>
          <Form.Select
            className="custom-dropdown"
            value={selectedVilla}
            onChange={(e) => setSelectedVilla(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Villa 1">Villa 1</option>
            <option value="Villa 2">Villa 2</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stage</Form.Label>
          <Form.Select
            className="custom-dropdown"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Planning">Planning</option>
            <option value="Construction">Construction</option>
            <option value="Completion">Completion</option>
          </Form.Select>
        </Form.Group>

        <div className="text-end">
          <Button variant="warning" type="submit">
            Send
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Feedback;
