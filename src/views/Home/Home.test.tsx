import { QueryClientProvider, QueryClient } from "react-query";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";

import { theme } from "../../styles";
import { server } from "../../mocks/server";
import { BASE_URL } from "../../api/exchanges";

import Home from "./index";

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>
  );

describe("<Home />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render spinner when exchanges list is fetching", async () => {
    renderComponent();
    expect(screen.getByTestId("spinner")).toBeVisible();
  });

  it("Should render exchanges list", async () => {
    renderComponent();
    expect(await screen.findByText("Exchanges")).toBeVisible();
    expect(await screen.findByText("Binance")).toBeVisible();
    expect(await screen.findByText("OKX")).toBeVisible();
  });

  it("Should render 'No data available' message when exchanges list is empty", async () => {
    server.use(
      rest.get(`${BASE_URL}/exchanges`, (req, res, ctx) =>
        res(ctx.status(200), ctx.json([]))
      )
    );
    renderComponent();
    expect(await screen.findByText("No data available")).toBeVisible();
  });
});
