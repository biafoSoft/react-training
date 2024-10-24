import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import InterestsForm from "../forms/InterestsForm";

function Interests() {
  const [isVisible, setIsVisible] = useState(false);
  const [interests, setInterests] = useState([]);

  // Load interests from localStorage when the component mounts
  useEffect(() => {
    const savedInterests = localStorage.getItem("interests");
    if (savedInterests) {
      setInterests(JSON.parse(savedInterests)); // Parse and set the interests from local storage
    } else {
      // If no interests are in local storage, set default interests
      const defaultInterests = ["Coding", "Playing Games"];
      setInterests(defaultInterests);
      localStorage.setItem("interests", JSON.stringify(defaultInterests)); // Save the default interests to local storage
    }
  }, []);

  const handleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleInterestInfo = (newInterest) => {
    const updatedInterests = [...interests, newInterest];
    setInterests(updatedInterests);
    localStorage.setItem("interests", JSON.stringify(updatedInterests)); // Save updated interests to local storage
  };

  return (
    <div className="my-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Interests</h2>
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
          <InterestsForm
            show={isVisible}
            onHide={setIsVisible}
            onSave={handleInterestInfo}
          />
        )}
      </div>
      <div className="d-flex flex-wrap p-2 gap-2 pb-2">
        {interests.map((interest, index) => (
          <Button className="mb-2" variant="outline-secondary" key={index} disabled>
            {interest}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Interests;
