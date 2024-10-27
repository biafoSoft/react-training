import { useState, useEffect } from "react";
import ExperienceForm from "../forms/ExperienceForm";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceList, setExperienceList] = useState([]);

  // Load experience data from localStorage when the component mounts
  useEffect(() => {
    const savedExperience = localStorage.getItem("experience");
    if (savedExperience) {
      setExperienceList(JSON.parse(savedExperience));
    } else {
      const defaultExperience = [
        {
          title: "Software Developer",
          company: "XYZ Corp",
          from: "2020-01-01",
          to: "2022-12-31",
          location: "Islamabad",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et velit non nunc rutrum pretium.",
        },
      ];
      setExperienceList(defaultExperience);
      localStorage.setItem("experience", JSON.stringify(defaultExperience));
    }
  }, []);

  // Toggle the visibility of the ExperienceForm
  const handleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Function to add a new experience to the experience list
  const handleAddExperience = (newExperience) => {
    const updatedExperienceList = [...experienceList, newExperience];
    setExperienceList(updatedExperienceList);
    localStorage.setItem("experience", JSON.stringify(updatedExperienceList)); // Save updated experience list to localStorage
    setIsVisible(false); // Close the modal after saving
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-secondary">Work Experience</h2>
        {/* Pencil Icon to toggle the form */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
          style={{ cursor: "pointer" }}
          onClick={handleFormVisibility}
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </div>

      {/* Conditionally render the ExperienceForm */}
      {isVisible && (
        <ExperienceForm show={isVisible} onHide={handleFormVisibility} onSave={handleAddExperience} />
      )}

      {/* Display Experience List */}
      {experienceList.map((job, index) => (
        <div key={index} className="mb-3">
          <h4>{job.title}</h4>
          <h5>{job.company}</h5>
          <div className="d-flex justify-content-between">
            <p className="text-secondary">
              {job.from} - {job.to}
            </p>
            <p className="text-secondary">{job.location}</p>
          </div>
          <ul>
            <li>{job.description}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
