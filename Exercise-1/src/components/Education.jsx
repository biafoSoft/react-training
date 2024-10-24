import { useState, useEffect } from "react";
import EducationInfoForm from "../forms/EducationInfoForm";

function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [educationList, setEducationList] = useState([]);

  // Load education data from localStorage when the component mounts
  useEffect(() => {
    const savedEducation = localStorage.getItem("education");
    if (savedEducation) {
      setEducationList(JSON.parse(savedEducation));
    } else {
      const defaultEducation = [
        {
          degree: "BSCS",
          institution: "SIBA",
          from: "2020-01-01",
          to: "2022-12-31",
          gpa: "3.4",
        },
      ];
      setEducationList(defaultEducation);
      localStorage.setItem("education", JSON.stringify(defaultEducation)); 
    }
  }, []);

  
  const handleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  
  const handleAddEducation = (newEducation) => {
    const updatedEducationList = [...educationList, newEducation];
    setEducationList(updatedEducationList);
    localStorage.setItem("education", JSON.stringify(updatedEducationList)); 
    setIsVisible(false); 
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-secondary">Education</h2>
        
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

      {isVisible && (
        <EducationInfoForm
          show={isVisible}
          onHide={handleFormVisibility}
          onSave={handleAddEducation}
        />
      )}

      {educationList.map((edu, index) => (
        <div key={index} className="mb-3">
          <h4>{edu.degree}</h4>
          <h5>{edu.institution}</h5>
          <div className="d-flex justify-content-between">
            <p className="text-secondary">
              {edu.from} - {edu.to}
            </p>
            <p className="text-secondary">{edu.gpa}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
