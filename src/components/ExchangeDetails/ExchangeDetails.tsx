import { ChevronLeft, Facebook, Twitter, Reddit } from "react-bootstrap-icons";

import Layout from "../Layout";

import {
  ExchangeLogo,
  Info,
  Item,
  Label,
  LogoContainer,
  SocialMediaLink,
  SocialMediaLinks,
  StyledLInk,
  Title,
} from "./ExchangeDetails.styles";

const ExchangeDetails = () => (
  <Layout>
    <StyledLInk to="/">
      <ChevronLeft /> Back
    </StyledLInk>
    <Title>Binance</Title>
    <Info>
      <LogoContainer>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <ExchangeLogo
            src="https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250"
            alt="Binance"
          />
        </a>
        <SocialMediaLinks>
          <SocialMediaLink
            href="https://www.facebook.com/binanceexchange"
            rel="noreferrer"
            target="_blank"
          >
            <Facebook />
          </SocialMediaLink>
          <SocialMediaLink
            href={`https://twitter.com/${"binance"}`}
            rel="noreferrer"
            target="_blank"
          >
            <Twitter />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.reddit.com/r/binance/"
            rel="noreferrer"
            target="_blank"
          >
            <Reddit />
          </SocialMediaLink>
        </SocialMediaLinks>
      </LogoContainer>
      <div>
        <Item>
          <Label>Country</Label>
          <div>Cayman Islands</div>
        </Item>
        <Item>
          <Label>Trust ran</Label>
          <div>1</div>
        </Item>
        <Item>
          <Label>Year of establishment</Label>
          <div>2017</div>
        </Item>
        <Item>
          <Label>Description</Label>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus
            eveniet. Quia ex ea explicabo aperiam? Quas iusto provident
            recusandae labore nemo at maiores, nisi odio sapiente, asperiores
            eaque eligendi.
          </div>
        </Item>
      </div>
    </Info>
  </Layout>
);

export default ExchangeDetails;
