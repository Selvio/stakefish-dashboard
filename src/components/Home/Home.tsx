import Layout from "../Layout";

import {
  Anchor,
  Buttons,
  ExchangeLogo,
  Info,
  Name,
  StyledLink,
  Table,
  TableContainer,
  Title,
} from "./Home.styles";

const Home = () => (
  <Layout>
    <Title>Exchanges</Title>
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Trust Rank</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Info>
                <ExchangeLogo
                  src="https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250"
                  alt="Binance"
                />
                <Name>Binance</Name>
              </Info>
            </td>
            <td>Cayman Islands</td>
            <td>1</td>
            <td>
              <Buttons>
                <Anchor href="https://www.google.com/" target="_blank">
                  Official Website
                </Anchor>
                <StyledLink to="/exchanges/binance">Details</StyledLink>
              </Buttons>
            </td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  </Layout>
);

export default Home;
