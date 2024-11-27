import { useState, useEffect } from "react";
import GeneralInfoForm from "../forms/GeneralInfoForm";

function General() {
  const [isVisible, setIsVisible] = useState(false);
  const [generalInfo, setGeneralInfo] = useState({
    name: "Full Name",
    designation: "Designation",
    description: "Description",
  });

  // Load generalInfo from localStorage when the component mounts
  useEffect(() => {
    const savedGeneralInfo = localStorage.getItem("generalInfo");
    if (savedGeneralInfo) {
      setGeneralInfo(JSON.parse(savedGeneralInfo)); // Parse and set the general info from local storage
    }
  }, []);

  const handleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleGeneralInfo = (info) => {
    // Update the state and save to localStorage (replacing existing data)
    const newInfo = {
      name: info.name,
      designation: info.designation,
      description: info.description,
    };
    setGeneralInfo(newInfo);
    localStorage.setItem("generalInfo", JSON.stringify(newInfo)); // Save new info in local storage
    setIsVisible(false); // Close the modal after saving
  };

  return (
    <div className="container">
      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1>{generalInfo.name}</h1>
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
          {isVisible && (
            <GeneralInfoForm
              show={isVisible}
              onHide={handleFormVisibility}
              onSave={handleGeneralInfo}
            />
          )}
        </div>
        <h3 className="text-secondary">{generalInfo.designation}</h3>
        <p>{generalInfo.description}</p>
      </div>
    </div>
  );
}

export default General;
