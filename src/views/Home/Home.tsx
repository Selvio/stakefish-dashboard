import Spinner from "../../components/Spinner";

import useHome from "./useHome";

import {
  Anchor,
  Buttons,
  ExchangeLogo,
  Info,
  InnerContainer,
  Name,
  SpinnerContainer,
  StyledLink,
  Table,
  TableContainer,
  Title,
} from "./Home.styles";

const Home = () => {
  const { exchanges, error, isLoading, scrollIndicatorsState, containerRef } =
    useHome();

  if (error) return <div>An error has occurred 😵</div>;

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  if (!exchanges?.length) return <div>No data available</div>;

  return (
    <div>
      <Title>Exchanges</Title>
      <TableContainer scrollIndicatorsState={scrollIndicatorsState}>
        <InnerContainer ref={containerRef}>
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
                        <StyledLink to={`/exchanges/${id}`}>Details</StyledLink>
                        {url && (
                          <Anchor href={url} target="_blank" rel="noreferrer">
                            Official Website
                          </Anchor>
                        )}
                      </Buttons>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </InnerContainer>
      </TableContainer>
    </div>
  );
};

export default Home;
