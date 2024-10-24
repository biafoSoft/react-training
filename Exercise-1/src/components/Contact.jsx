import { useEffect, useState } from "react";
import ContactForm from "../forms/ContactForm";
function Contact() {
    const [isVisible, setIsVisible]= useState(false);
    const [contactInfo, setContactInfo]= useState({
        "email":"name@gmail.com",
        "phone":"03xxxxxxxxx",
        "linkedIn":"linkedIn.com/name",
        "github":"github.com/name",
    });
   
    //     const newInfo={
    //         ...info,
    //         email: info.gmail,
    //         phone: info.phone,
    //         linkedIn: info.linkedIn,
    //         github: info.github
    //     };
    //     setContactInfo(newInfo);
    //     setIsVisible(false);
    // };


    useEffect(() => {
        const storedInfo = JSON.parse(localStorage.getItem("contactInfo"));
        if (storedInfo) {
            setContactInfo(storedInfo);
        }
    }, []);

    const handleFormVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleContactInfo = (info) => {
        const newInfo = {
            email: info.gmail,
            phone: info.phone,
            linkedIn: info.linkedIn,
            github: info.github,
        };
       
        setContactInfo(newInfo);

        localStorage.setItem("contactInfo", JSON.stringify(newInfo));

        setIsVisible(false);
    };

  return (
    <div className="bg-contact py-3 d-flex">
        <div className="container d-flex justify-content-between">
            <a href={`mailto:${contactInfo.email}`} className="text-decoration-none">
                <div className="d-flex align-items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                    >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <p className="m-0 text-black">{contactInfo.email}</p>
                </div>
            </a>

            <a href="#" className="text-decoration-none">
                <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <p className="m-0 text-black ">{contactInfo.phone}</p>
                </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                <p className="m-0 text-black ">{contactInfo.linkedIn}</p>
            </div>
            </a>
            <a href="#" className="text-decoration-none">
                <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            <p className="m-0 text-black ">{contactInfo.github}</p>
                        </div>
                    
            </a>
            
        </div>
        <div className="pr-4">
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
            { isVisible && <ContactForm show={isVisible} onHide={handleFormVisibility} onSave={handleContactInfo}/>}
        </div>

        
    </div>
  )
}

export default Contact
