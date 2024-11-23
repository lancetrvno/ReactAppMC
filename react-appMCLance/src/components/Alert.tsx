import React, { ReactNode } from "react";

interface Props {
    children: ReactNode; 
    onClose: () => void; 
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <div className="alert alert-primary">
            {children}
            <button type="button" className="close" onClick={onClose}>
                &times; {/* Close button (X) */}
            </button>
        </div>
    );
}

export default Alert;
