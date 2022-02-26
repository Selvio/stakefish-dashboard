import { Exchange, ExchangeDetails } from "./exchange.types";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getExchanges = (limit = 10): Promise<Exchange[]> =>
  fetch(`${BASE_URL}/exchanges?per_page=${limit}`).then((response) =>
    response.json()
  );

export const getExchange = (id: string): Promise<ExchangeDetails> =>
  fetch(`${BASE_URL}/exchanges/${id}`).then((response) => response.json());
