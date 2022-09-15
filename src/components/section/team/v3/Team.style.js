import styled from "styled-components";

const TeamStyleWrapper = styled.section`
  margin-top: 50px;
  background: rgba(33, 33, 33, 0.5); 
  backdrop-filter: blur(5px);
  position: center;

  .v1_team_overlay {
    padding: 0px 0 140px 0;
    position: center;
    width: 100%;
    height: 100%;
    background: #212121;
    z-index: 1;
    border-radius: 15px;
  }

  .riph_team_content {
    margin-top: 53px; 
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
