import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ChevronLeft, Facebook, Twitter, Reddit } from "react-bootstrap-icons";

import Spinner from "../../components/Spinner";

import { getExchange } from "../../api/exchanges";

import {
  ExchangeLogo,
  Info,
  Item,
  Label,
  LogoContainer,
  SocialMediaLink,
  SocialMediaLinks,
  SpinnerContainer,
  StyledLInk,
  Title,
} from "./ExchangeDetails.styles";

const ExchangeDetails = () => {
  const { exchangeId = "" } = useParams();
  const {
    data: exchange,
    error,
    isLoading,
  } = useQuery(
    `exchange-details-${exchangeId}`,
    () => getExchange(exchangeId),
    {
      enabled: !!exchangeId,
    }
  );

  if (error) return <div>An error has occurred</div>;

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  const {
    country,
    description,
    facebook_url,
    image,
    name,
    reddit_url,
    trust_score_rank,
    twitter_handle,
    url,
    year_established,
  } = exchange || {};

  const socialMediaLinks = [
    { id: "1", href: facebook_url, icon: <Facebook /> },
    {
      id: "2",
      href: `https://twitter.com/${twitter_handle}`,
      icon: <Twitter />,
    },
    { id: "3", href: reddit_url, icon: <Reddit /> },
  ];

  const infoItems = [
    { label: "Country", value: country },
    { label: "Trust rank", value: trust_score_rank },
    { label: "Year of establishment", value: year_established },
    { label: "Description", value: description || "-" },
  ];

  return (
    <div>
      <StyledLInk to="/">
        <ChevronLeft /> Back
      </StyledLInk>
      <Title>{name}</Title>
      <Info>
        <LogoContainer>
          <a href={url} target="_blank" rel="noreferrer">
            <ExchangeLogo src={image} alt={name} />
          </a>
          <SocialMediaLinks>
            {socialMediaLinks.map(({ href, icon, id }) => {
              if (!href) return null;
              return (
                <SocialMediaLink
                  href={href}
                  key={id}
                  rel="noreferrer"
                  target="_blank"
                >
                  {icon}
                </SocialMediaLink>
              );
            })}
          </SocialMediaLinks>
        </LogoContainer>
        <div>
          {infoItems.map(({ label, value }) => (
            <Item key={label}>
              <Label>{label}</Label>
              <div>{value}</div>
            </Item>
          ))}
        </div>
      </Info>
    </div>
  );
};

export default ExchangeDetails;
