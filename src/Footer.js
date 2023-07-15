import React from "react";

const Footer = ({ itemLength }) => {
  const today = new Date();

  const centerText = {
    textAlign: "center",
  };

  return (
    <footer>
      <p style={centerText}>
        {itemLength} List {itemLength === 1 ? "item" : "items"}
      </p>
      <p style={centerText}>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
