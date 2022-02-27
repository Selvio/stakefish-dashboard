import { Exchange, ExchangeDetails } from "./exchange.types";
import apiFetch from "./apiFetch";

export const BASE_URL = "https://api.coingecko.com/api/v3";

export const getExchanges = (limit = 10): Promise<Exchange[]> =>
  apiFetch(`${BASE_URL}/exchanges?per_page=${limit}`);

export const getExchange = (id: string): Promise<ExchangeDetails> =>
  apiFetch(`${BASE_URL}/exchanges/${id}`);
