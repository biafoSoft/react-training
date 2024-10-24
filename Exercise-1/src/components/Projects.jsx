import { useState, useEffect } from 'react';
import ProjectsForm from '../forms/ProjectsForm';

function Projects() {
  const [isVisible, setIsVisible]= useState(false);
    const [projects, setProjects] = useState([]);
    const handleFormVisibility=()=>{
      setIsVisible(!isVisible);
    }
    // Load projects from local storage when the component mounts
    useEffect(() => {
        const savedProjects = localStorage.getItem("projects");
        if (savedProjects) {
            setProjects(JSON.parse(savedProjects)); // Parse and set the projects from local storage
        } else {
            // Fallback to the default projects array if nothing is in local storage
            const defaultProjects = [
                {
                  "title": "Personal Portfolio Website",
                  "description": "Created a responsive portfolio website using HTML, CSS, and React to showcase personal projects and skills. Implemented dynamic routing and interactive elements to enhance user experience."
                },
                {
                  "title": "Weather App",
                  "description": "Developed a weather application using JavaScript and API integration to display real-time weather data. The app allows users to search for weather information by city with responsive design for various devices."
                },
                {
                  "title": "Task Management Tool",
                  "description": "Built a simple task management app using the MERN stack (MongoDB, Express, React, Node.js). It enables users to create, update, and track daily tasks with a secure backend for data storage."
                }
            ];
            setProjects(defaultProjects);
            localStorage.setItem("projects", JSON.stringify(defaultProjects)); // Save the default projects to local storage
        }
    }, []);

    // Example function to add a new project (not connected to any form yet)
    const addProject = (newProject) => {
        const updatedProjects = [...projects, newProject];
        setProjects(updatedProjects);
        localStorage.setItem("projects", JSON.stringify(updatedProjects)); // Save updated projects to local storage
    };

    return (
        <div className="mt-3">
            <div className='d-flex justify-content-between align-items-center'>
                <h2 className="text-secondary">Projects</h2>
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
            {isVisible && <ProjectsForm show={isVisible} onHide={handleFormVisibility} onSave={addProject}/>}

            </div>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="mb-2">
                        <h5>{project.title}</h5>
                        <ul>
                            <li>{project.description}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
