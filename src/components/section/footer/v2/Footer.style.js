import styled from "styled-components";

const FooterStyleWrapper = styled.footer`
  padding-top: 105px;
  position: relative;

  &::before {
    position: absolute;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: "";
    height: 76%;
    width: 100%;
    bottom: 0px;
  }
`;

export default FooterStyleWrapper;
