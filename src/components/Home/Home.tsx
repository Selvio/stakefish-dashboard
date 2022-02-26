import { useQuery } from "react-query";

import { getExchanges } from "../../api/exchanges";

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

const Home = () => {
  const {
    isLoading,
    error,
    data: exchanges,
  } = useQuery("exchangesData", () => getExchanges());

  if (error) return <div>An error has occurred</div>;

  return (
    <Layout isLoading={isLoading}>
      <Title>Exchanges</Title>
      {exchanges?.length ? (
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
              {exchanges.map(
                ({ id, country, image, name, url, trust_score_rank }) => (
                  <tr key={id}>
                    <td>
                      <Info>
                        <ExchangeLogo src={image} alt={name} />
                        <Name>{name}</Name>
                      </Info>
                    </td>
                    <td>{country}</td>
                    <td>{trust_score_rank}</td>
                    <td>
                      <Buttons>
                        <Anchor href={url} target="_blank" rel="noreferrer">
                          Official Website
                        </Anchor>
                        <StyledLink to={`/exchanges/${id}`}>Details</StyledLink>
                      </Buttons>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </TableContainer>
      ) : (
        <div>No data available.</div>
      )}
    </Layout>
  );
};

export default Home;
