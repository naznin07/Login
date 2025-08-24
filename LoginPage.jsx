import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!phone.startsWith("+254")) {
      return setError("Phone number must start with +254");
    }
    if (phone === "+254712345678") {
      login(phone);
      navigate("/main");
    } else {
      setError("Invalid phone number.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
        className="border p-2 rounded mb-2"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
