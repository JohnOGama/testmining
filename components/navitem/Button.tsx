import React from "react";
//import { Link } from "react-router-dom";
import Link from 'next/link'
import "./Button.css";

function Button() {
  return (
    <Link href="signup">
      <button className="btn">Sign Up</button>
    </Link>
  );
}

export default Button;
