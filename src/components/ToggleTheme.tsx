import { useState } from "react";

function ToggleTheme(){

    const [isOn, setIsOn] = useState(false);

    function handleToggle() {
        setIsOn(!isOn);
    }

    return(
        <div>
        <button
          onClick={handleToggle}
          style={{
          backgroundColor: isOn ? "white" : "gray",
          color: isOn ? "white" : "ehite" ,
        //   color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {isOn ? "☀" : "☾"}
      </button>
    </div>
    );
}

export default ToggleTheme;