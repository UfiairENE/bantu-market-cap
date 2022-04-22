import React from "react";
import { HeaderWrap, LogoLink } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <LogoLink href="/">
        <p>BantuCoinMarket</p>
      </LogoLink>
    </HeaderWrap>
  );
};

export { Header };
