import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #FFF;
  border-bottom: 1px solid #FFF;
  box-shadow: 0px 2px 6px #C1C1C1;
  align-items: center;
`;

const HeaderLogo = styled.img`
  height: 60px;
  object-fit: none; 

  @media (max-width: 768px) {
    height: 36px;
    width: 92px;
    margin: 4px;
  }
`;

const Header: React.FC = () => {
    return (
        <HeaderDiv>
            <HeaderLogo
                src={`/img/Logo.png`}
                alt={"Logo empresa"}
            />
        </HeaderDiv>

    );
};

export default Header;