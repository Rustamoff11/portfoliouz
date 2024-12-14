// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import rezume from "../assets/rezume.jpg"
// function Resume() {
//   return (
//     <div className="resume-body flex font-bold pt-8 pl-12 pb-8">
//       <Link to="/">
//         <div className="g-btn" title="Home">
//           <FontAwesomeIcon icon={faChevronLeft} /> Back
//         </div>

//         <div>
//           <img src={rezume} alt="" />
//         </div>
//       </Link>

      
//       <SideBar />
//     </div>
//   );
// }

// export default Resume;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import rezumer from "../assets/Images/rezume.jpg";

function Resume() {
  return (
    <div className="resume-body flex font-bold pt-8 pl-12 pb-8">
      <div className="flex flex-col items-start">
        <Link to="/">
          <div className="g-btn flex items-center gap-2 text-xl mb-6" title="Home">
            <FontAwesomeIcon icon={faChevronLeft} />
            Back
          </div>
        </Link>

        <div className="mb-6">
          <img 
            src={rezumer} 
            alt="Resume image" 
            className="w-full max-w-md rounded-lg shadow-lg" 
          />
        </div>
      </div>

      <SideBar />
    </div>
  );
}

export default Resume;

