import { useNavigate } from "react-router-dom";

import studentImg from "../assets/student.jpg";
import staffImg from "../assets/staff.jpg";
import visitorImg from "../assets/visitor.png";
import identityImg from "../assets/identity.png";
import occupancyImg from "../assets/occupancy.avif";
import analyticsImg from "../assets/complaint.png";
import crowdImg from "../assets/crowd.jpg";


export default function SelectRole() {
  const navigate = useNavigate();

  const selectRole = (role: "student" | "admin") => {
    localStorage.setItem("selectedRole", role);
    navigate("/login");
  };

  return (
    <div className="bg-hostel role-container">
      <div className="card role-card" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "8px" }}>
          Welcome to <span style={{ color: "#2563eb" }}>THE HostelEase</span>
        </h1>

        <p className="meta" style={{ fontSize: "16px" }}>
          Choose how you want to continue
        </p>

        <div className="role-grid">
          {/* STUDENT CARD */}
          <div
            className="role-option"
            onClick={() => selectRole("student")}
          >
            <div className="role-image-wrapper">
              <img
                src={studentImg}
                alt="Hostel Student"
                className="role-image"
              />
            </div>

            <div className="role-title">Hostel Student</div>
            <div className="role-desc">
              Report hostel issues and track their resolution status.
            </div>
          </div>

          {/* STAFF CARD */}
          <div
            className="role-option"
            onClick={() => selectRole("admin")}
          >
            <div className="role-image-wrapper">
              <img
                src={staffImg}
                alt="Management Staff"
                className="role-image"
              />
            </div>

            <div className="role-title">Management Staff (Warden)</div>
            <div className="role-desc">
              Manage, review, and resolve reported hostel issues.
            </div>
          </div>
          {/* STAFF CARD */}
<div
  className="role-option"
  onClick={() => selectRole("admin")}
>
  <div 
   onClick={() => navigate("/visitor")}
  className="role-image-wrapper">
    <img
      src={visitorImg}
      alt="Management Staff"
      className="role-image"
    />
  </div>
  <div className="role-title">Visitor Portal</div>
  <div className="role-desc">
     Register visitors, generate QR gate passes, and track hostel entry/exit.
  </div>
</div>


          
        </div>
        </div>

        <div className="ai-main-section">
  <h2> AI-Powered Hostel Intelligence</h2>

  <div className="ai-grid">

  <div className="ai-box" onClick={() => navigate("/ai-identity")}>
  <img
    src={identityImg}
    alt="Identity Verification"
    className="ai-img"
  />

  <h3>AI Identity Verification</h3>

  <p>
    Verify students and visitors at hostel entry points using facial
    recognition and ID matching.
  </p>
</div>

<div className="ai-box" onClick={() => navigate("/occupancy")}>
  <img
    src={occupancyImg}
    alt="Occupancy Prediction"
    className="ai-img"
  />

  <h3>Occupancy Prediction</h3>

  <p>
    Predict hostel occupancy trends and help administrators plan room
    allocation efficiently.
  </p>
</div>

<div className="ai-box" onClick={() => navigate("/complaints-analytics")}>
  <img
    src={analyticsImg}
    alt="Complaint Analytics"
    className="ai-img"
  />

  <h3>Complaint Analytics</h3>

  <p>
    Detect recurring complaint patterns and identify high-risk hostel
    blocks automatically.
  </p>
</div>

<div className="ai-box" onClick={() => navigate("/crowd-alerts")}>
  <img
    src={crowdImg}
    alt="Smart Crowd Alerts"
    className="ai-img"
  />

  <h3>Smart Crowd Alerts</h3>

  <p>
    Generate alerts when mess halls, gates, or common areas become
    overcrowded.
  </p>
  </div>
</div>
</div>

      
    </div>
  );
}