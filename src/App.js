import { useState } from "react";
import AddShift from "./components/AddShift";
import AddStaff from "./components/AddStaff";
import StaffList from "./components/StaffList";

const App = () => {
  const [roster, setRoster] = useState({});

  return (
    <div>
      <header
        style={{
          display: "flex",
          height: "8vh",
          backgroundColor: "darkblue",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          fontFamily: "Georgia, Times New Roman, Times, serif;",
        }}
      >
        Staff Roster Management App
      </header>
      <AddStaff roster={roster} setRoster={setRoster} />
      <AddShift roster={roster} setRoster={setRoster} />
      <StaffList roster={roster} />
    </div>
  );
};

export default App;
