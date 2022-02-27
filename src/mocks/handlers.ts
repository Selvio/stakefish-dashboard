import { rest } from "msw";
import { BASE_URL } from "../api/exchanges";

export const handlers = [
  rest.get(`${BASE_URL}/exchanges`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: "binance",
          name: "Binance",
          year_established: 2017,
          country: "Cayman Islands",
          description: "",
          url: "https://www.binance.com/",
          image:
            "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
          has_trading_incentive: false,
          trust_score: 10,
          trust_score_rank: 1,
          trade_volume_24h_btc: 284810.43408927775,
          trade_volume_24h_btc_normalized: 284810.43408927775,
        },
        {
          id: "okex",
          name: "OKX",
          year_established: 2013,
          country: "Belize",
          description: "",
          url: "https://www.okx.com",
          image:
            "https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377",
          has_trading_incentive: false,
          trust_score: 10,
          trust_score_rank: 2,
          trade_volume_24h_btc: 94851.94332897056,
          trade_volume_24h_btc_normalized: 94851.94332897056,
        },
      ])
    )
  ),
  rest.get(`${BASE_URL}/exchanges/binance`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        name: "Binance",
        year_established: 2017,
        country: "Cayman Islands",
        description: "",
        url: "https://www.binance.com/",
        image:
          "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
        facebook_url: "https://www.facebook.com/binanceexchange",
        reddit_url: "https://www.reddit.com/r/binance/",
        telegram_url: "",
        slack_url: "",
        other_url_1: "https://medium.com/binanceexchange",
        other_url_2: "https://steemit.com/@binanceexchange",
        twitter_handle: "binance",
        has_trading_incentive: false,
        centralized: true,
        public_notice: "",
        alert_notice: "",
        trust_score: 10,
        trust_score_rank: 1,
        trade_volume_24h_btc: 260172.5489688897,
        trade_volume_24h_btc_normalized: 260172.5489688897,
      })
    )
  ),
];
