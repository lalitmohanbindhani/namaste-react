import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search resLisr for Pizza text input", async () => {
  await act(
    (async = () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      ))
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated Resturant", async () => {
  await act(
    (async = () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      ))
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });
  fireEvent.click(topRatedButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(17);
});
