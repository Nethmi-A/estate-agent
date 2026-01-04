import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCard from "../components/ImageCard";
import { HashRouter } from "react-router-dom";

const mockProperty = {
  id: "1",
  type: "Apartment",
  location: "London",
  price: 250000,
  picture: "/images/test.jpg",
  bedrooms: 2,
  tenure: "Freehold",
  description: "Nice apartment"
};

test("ImageCard displays property details", () => {
  render(
    <HashRouter>
      <ImageCard
        property={mockProperty}
        addToFavourites={jest.fn()}
      />
    </HashRouter>
  );

  expect(screen.getByText("London")).toBeInTheDocument();
  expect(screen.getByText(/£250,000/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /add to favourites/i })
  ).toBeInTheDocument();
});
