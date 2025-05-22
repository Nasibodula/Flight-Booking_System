import React, { useEffect, useState } from "react";



const SuccessMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popUpMessage" style={{ backgroundColor: "#28a745" }}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessage;
