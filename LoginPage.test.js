import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import { AuthContext } from "../context/AuthContext";
import { BrowserRouter } from "react-router-dom";

test("displays error on invalid phone", () => {
  render(
    <AuthContext.Provider value={{ login: jest.fn() }}>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </AuthContext.Provider>
  );

  fireEvent.change(screen.getByPlaceholderText(/enter phone number/i), {
    target: { value: "0712345678" },
  });
  fireEvent.click(screen.getByText(/login/i));
  expect(screen.getByText(/must start with \+254/i)).toBeInTheDocument();
});
