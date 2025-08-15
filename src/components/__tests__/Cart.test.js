import { act, fireEvent, render, screen } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Resturant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const acordianHeader = screen.getByText("Make Your Own Combo (2)");
  fireEvent.click(acordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
  expect(screen.getByText("🛒0")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒1")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒2")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(4);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
  expect(screen.getByText("Cart is empty. Add items to the Cart!"));
});
