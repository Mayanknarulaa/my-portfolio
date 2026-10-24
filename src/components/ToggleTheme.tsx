type ToggleThemeProps = {
  isDark: boolean;
  onToggle: () => void;
};

function ToggleTheme({ isDark, onToggle }: ToggleThemeProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        style={{
          backgroundColor: isDark ? "gray" : "white",
          color: isDark ? "white" : "black",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {isDark ? "☾" : "☀"}
      </button>
    </div>
  );
}

export default ToggleTheme;



// import { useState } from "react";

// function ToggleTheme(){

//     const [isOn, setIsOn] = useState(false);

//     function handleToggle() {
//         setIsOn(!isOn);
//     }

//     return(
//         <div>
//         <button
//           onClick={handleToggle}
//           style={{
//           backgroundColor: isOn ? "white" : "gray",
//           color: isOn ? "white" : "ehite" ,
//         //   color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "20px",
//           cursor: "pointer",
//         }}
//       >
//         {isOn ? "☀" : "☾"}
//       </button>
//     </div>
//     );
// }

// export default ToggleTheme;