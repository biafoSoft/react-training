// import { useState } from "react";
// import CertificatesForm from "../forms/CertificatesForm";

// const certificates = [
//   {
//     "name": "Full Stack Web Development",
//     "issuer": "Coursera"
//   },
//   {
//     "name": "JavaScript Algorithms and Data Structures",
//     "issuer": "freeCodeCamp"
//   },
//   {
//     "name": "Responsive Web Design",
//     "issuer": "Udemy"
//   }
// ];


// function Certificates() {
//   const [isVisible, setIsVisible]=useState(false);
//   const [certsInfo, setCertsInfo]=useState([{
//     name:"Full Stack Web Development",
//     issuer:"Coursera"
//   }])
//   const handleFormVisibility=()=>{
//     setIsVisible(!isVisible);
//   }
//   const handleCertsInfo=(newCert)=>{
//       setCertsInfo([...certsInfo, newCert]);
//       setIsVisible(false);
//     }
  
//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center">
//           <h2 className="text-secondary">Certificates</h2>
//           <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-pencil-square"
//                     viewBox="0 0 16 16"
//                     style={{ cursor: "pointer" }}
//                     onClick={handleFormVisibility}
                    
//                 >
//                     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//                     <path
//                     fillRule="evenodd"
//                     d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
//                     />
//           </svg>
//           {isVisible && <CertificatesForm show={isVisible} onHide={handleFormVisibility} onSave={handleCertsInfo}/>}
//       </div>
//       <div>
//         {
//           certsInfo.map((certs, index) => (
//             <div key={index} className="mb-1">
             
//                 <div className="d-flex justify-content-between p-2">
//                   <p>{certs.name}</p>
//                   <p className="text-secondary">{certs.issuer}</p>
//                 </div>
              
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Certificates;




import { useState, useEffect } from "react";
import CertificatesForm from "../forms/CertificatesForm";

function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [certsInfo, setCertsInfo] = useState([]);

  // Load certificates from localStorage when the component mounts
  useEffect(() => {
    const savedCerts = localStorage.getItem("certificates");
    if (savedCerts) {
      setCertsInfo(JSON.parse(savedCerts));
    }
  }, []);

  // Toggle form visibility
  const handleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Add new certificate and update localStorage
  const handleCertsInfo = (newCert) => {
    const updatedCerts = [...certsInfo, newCert];
    setCertsInfo(updatedCerts);
    localStorage.setItem("certificates", JSON.stringify(updatedCerts));
    setIsVisible(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="text-secondary">Certificates</h2>
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
          <CertificatesForm
            show={isVisible}
            onHide={handleFormVisibility}
            onSave={handleCertsInfo}
          />
        )}
      </div>
      <div>
        {certsInfo.map((certs, index) => (
          <div key={index} className="mb-1">
            <div className="d-flex justify-content-between p-2">
              <p>{certs.cert}</p>
              <p className="text-secondary">{certs.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
