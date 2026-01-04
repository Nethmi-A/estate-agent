import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "../App";
test('favourite icon is visible', () => {
    render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  expect(screen.getByTitle(/favourites/i)).toBeInTheDocument();
});
