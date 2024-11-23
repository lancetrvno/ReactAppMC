import React, { useState } from "react";
import Alert from "./components/Alert";
import ExerciseButton from "./components/ExerciseButton";

function App() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true); 
    };

    const handleClose = () => {
        setShowAlert(false); 
    };

    return (
        <div>
            <ExerciseButton onClick={handleClick}>My Button</ExerciseButton>
            {showAlert && (
                <Alert onClose={handleClose}>
                    My Alert!
                </Alert>
            )}
        </div>
    );
}

export default App;
