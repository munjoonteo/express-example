import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const showHomePage = () => {
    navigate("/");
  };

  return (
    <div className="title" onClick={showHomePage}>
      CSESoc Projects 2022
    </div>
  );
};

export default Header;
