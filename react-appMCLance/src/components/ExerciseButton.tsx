import React from "react";

interface Props {
    children: React.ReactNode;
    onClick: () => void; 
}

const ExerciseButton = ({ children, onClick }: Props) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {children}
        </button>
    );
}

export default ExerciseButton;

