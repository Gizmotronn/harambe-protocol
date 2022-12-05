import styled from "styled-components";

const TeamMemberStyleWrapper = styled.article` 
  .riph_team_card {
    max-width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0px;

    h3 {
      color: #ffffff;
      font-size: 24px;
      line-height: 34px;
      text-align: center;
      margin-top: 28px;
      margin-bottom: 4px;
    }

    h4 {
      font-family: "PT Sans", sans-serif;
      font-style: normal;
      text-align: center;
      font-size: 20px;
      line-height: 19px;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      margin-top: 5px;
      color: #ad2f2f;
    }

    img {
      border-radius: 50px;
      position: relative;
    }

    .harambian {
      position: absolute;
      top: 140px;
      margin-left: -75px;
      border-radius: 40px;
    }
  }

  .team_social_icon {
    width: 100%;
    position: absolute;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 197px;
      width: 100%;
      margin: 0;
      padding: 0;

      li {
        height: 0px;
        width: 37px;
        background: #0f181d;
        opacity: 0;
        transition: 0.4s;
        a {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 100%;
          width: 100%;
          color: #ffffff;
        }
      }
    }
  }

  .hover_shape {
    position: absolute;
    top: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;

    &.hov_shape1 {
      left: 10px;
    }

    &.hov_shape2 {
      right: 10px;
      transform: rotate(90deg);
    }
  }

  &:hover {
    .hover_shape {
      opacity: 1;
      visibility: visible;
    }

    &:hover {
      .team_social_icon {
        ul {
          li {
            opacity: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .riph_team_card {
      h3 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
`;

export default TeamMemberStyleWrapper;
