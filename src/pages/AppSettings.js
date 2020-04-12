// import React from 'react'
// import UserOptionDetails from '../components/UserOptionDetails'

// class AppSettings extends React.Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <div className="Page-container" id="AppSettings">
//                     <h1 className="Page-title">App Settings</h1>
//                     <div className="appsettings">
//                         <UserOptionDetails/>
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default AppSettings;

import React, { useState, useEffect } from 'react';

function AppSettings() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

 const handleCount = () => setCount(count + 1)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleCount}>
        Click me
      </button>
    </div>
  );
}

export default AppSettings;