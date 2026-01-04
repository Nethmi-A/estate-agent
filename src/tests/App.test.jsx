import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "../App";

test("renders search UI", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );

  expect(screen.getByText(/search/i)).toBeInTheDocument();
});
