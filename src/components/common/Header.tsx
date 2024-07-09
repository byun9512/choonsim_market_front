import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const HeaderBlock = styled.div`
  padding-inline: 1.5rem;
`;

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-bottom: solid 1px #f5f5f5;
  cursor: pointer;
  gap: 10px;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <HeaderBlock>
      <HeaderContainer onClick={handleLogoClick}>
        <Logo src="/svg/icon/header_logo.png" alt="Logo" height={30} />
        <Title>춘심 심부름센터</Title>
      </HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
