import styled from "styled-components";

const TeamStyleWrapper = styled.section`
  margin-top: 15px;
  background: rgba(333, 333, 33, 0.1); 
  backdrop-filter: blur(5px);
  position: center;

  img {
    //border-radius: 50px;
  }

  /*
  position: absolute;
  bottom: -10%;
  right: -20%;
  left: 80%;
  top: 70%;
  */

  h3 {
    color: #ffffff;
    font-size: 34px;
    line-height: 24px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 2px;
  }

  h4 {
    color: #ad2f2f;
    font-family: "PT Sans", sans-serif;
    font-style: normal;
    text-align: center;
    line-height: 16px;
    margin: 0;
  }

  .v1_team_overlay {
    padding: 0px 0 140px 0;
    position: center;
    width: 100%;
    height: 100%;
    background: #121111;
    z-index: 1;
    border-radius: 15px;
  }

  .riph_team_content {
    margin-top: 20px; 
    position: relative;
    z-index: 1;
    .row {
      row-gap: 30px;
    }
  }

  @media only screen and (max-width: 667px) {
    .v1_team_overlay {
      padding: 30px 0 100px 0;
    }
  }
`;

export default TeamStyleWrapper;
