import { QueryClientProvider, QueryClient } from "react-query";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { theme } from "../../styles";

import ExchangeDetails from "./index";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

const renderComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/exchanges/binance"]}>
          <Routes>
            <Route path="exchanges/:exchangeId" element={<ExchangeDetails />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );

describe("<ExchangeDetails />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render spinner when exchanges list is fetching", async () => {
    renderComponent();
    expect(screen.getByTestId("spinner")).toBeVisible();
  });

  it("Should render 'Back' button", async () => {
    renderComponent();
    expect(await screen.findByText("Back")).toBeVisible();
  });

  it("Should render exchange details", async () => {
    renderComponent();
    expect(await screen.findByText("Binance")).toBeVisible();
    expect(await screen.findByText("Cayman Islands")).toBeVisible();
    expect(await screen.findByText("2017")).toBeVisible();
  });
});
