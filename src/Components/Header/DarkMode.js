// import React, { useEffect, useState } from "react";
// // import '../Header/DarkMode.scss';
// export const ThemeComponent = () => {
//   let [mode, setMode] = useState(() => {
//     const storedTheme = localStorage.getItem("theme");
//     return storedTheme ? JSON.parse(storedTheme) : false;
//   });
//   let setLightMode = () => {
//     document.body.style.backgroundColor = "green";
//   };
//   let setDarkMode = () => {
//     document.body.style.backgroundColor = "green";
//   };
//   useEffect(() => {
//     localStorage.setItem("theme", JSON.parse(mode));
//     if (mode === true) {
//       setLightMode();
//     } else if (mode === false) {
//       setDarkMode();
//     }
//   }, [mode]);
//   const handleToggle = () => {
//     if (mode === true) {
//       setLightMode();
//       setMode(false);
//     } else if (mode === false) {
//       setDarkMode();
//       setMode(true);
//     }
//   };
//   return (
//     <React.Fragment>
//       <button className="btn btn-success" onClick={handleToggle}>
//         ToggleTheme
//       </button>
//     </React.Fragment>
//   );
// };
