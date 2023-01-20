import { useLocation } from "react-router-dom"

export default function DataRoute() {
  
  const location = useLocation();

  return <>
    <div className="d-flex flex-column">
        <h2>This is the User Data:</h2>
        <div>
            <h3>Email: {location.state.email}</h3>
        </div>
        <div>
            <h3>Password: {location.state.password}</h3>
        </div>

    </div>
  </>
}

// This code is using the useLocation hook from react-router-dom to get the current location object from the react-router library. 
// The useLocation hook returns the location object from the react-router library, which represents the current location in the app. 
// This location object has a state property, which in this case is an object that has email and password properties. 
// The DataRoute component is using JSX (JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your 
// JavaScript code.) to render the email and password values from the location.state object inside h3 elements.