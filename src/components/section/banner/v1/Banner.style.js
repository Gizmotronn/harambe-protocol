import styled, { keyframes } from "styled-components";
//import sectionBgImage from "../../../../assets/images/bg/h1_banner_bg.png";
import sectionBgImage from "../../../../assets/images/bg/v1_footer_bg.png";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const BannerV1Wrapper = styled.section`
  width: 100%;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  margin-top: 70px;

  .riph_v1_baner_left {
    max-width: 500px;
    width: 100%;
    min-height: 550px;
    display: flex;
    align-items: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-family: "PT Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      line-height: 15px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 32px;
    }

    h3 {
      font-family: "PT Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 35px;
      line-height: 30px;
      text-transform: uppercase;
      color: #cc1010;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 37px;
      border-radius: 50%;
      border-radius: 15px;
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 37px;
      span {
        font-family: "PT Sans", sans-serif;
        font-size: 18px;
        line-height: 36px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);

        & .highlighted {
          color: #ad2f2f;
        }
      }
    }
  }

  .riph_v1_baner_right {
    max-width: 500px;
    width: 100%;
    margin-right: auto;

    .mint_live_circle_sect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 100%;
      border: none;
      background: #ffe600;
      position: absolute;
      left: -65px;
      z-index: 1;

      .mint_live_circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .mint_live_text {
          animation: ${rotate} 20s linear infinite;
          position: absolute;
        }
      }
    }

    .riph_v1_baner_right_img_sect {
      position: relative;
      width: 100%;
      height: 120%;
      display: flex;
      align-items: center;
      justify-content: center;

      .riph_v1_baner_right_img_bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 10%;
        height: 20%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .riph_v1_baner_right_img {
        position: relative;
        width: 80%;
        height: 80%;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .riph_v1_baner_left {
      h2 {
        font-size: 50px;
        line-height: 65px;
      }

      h3 {
        font-size: 34px;
        line-height: 38px;
      }

      .baner_buttons {
        margin-top: 40px;
        border-radius: 15px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .riph_v1_baner_left {
      margin-top: 0px;
      justify-content: flex-start;
    }

    .riph_v1_baner_right {
      margin: 70px auto;
      max-width: 568px;
      width: 100%;

      .riph_v1_baner_right_img {
        width: 55%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .riph_v1_baner_left {
      h2 {
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 28px;
        line-height: 38px;
        
      }

      .banner_buttons{
        margin-top: 25px;
        border-radius: 15px;
      }
    }

    .riph_v1_baner_right {
      padding-right: 0px;

      .riph_v1_baner_right_img_sect {
        height: 100%;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .riph_v1_baner_left {
      h2 {
        font-size: 37px;
      }

      h3 {
        font-size: 22px;
      }

      .coin-info {
        font-size: 14px;
        line-height: 29px;
      }

      .banner_buttons{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            border-radius: 15px;
        
            .riph-btn + .riph-btn {
                margin-top: 20px;
            }
        }
    }

    .riph_v1_baner_right {
      padding-left: 34px;

      .mint_live_circle_sect{
        height: 90px;
        width: 90px;
        top: -36px;
        left: -40px;
    }
    }
  }

  @media (max-width: 375px) {
    .riph_v1_baner_left {
      h2 {
        font-size: 35px;
      }
      h3 {
        font-size: 22px;
      }
    }
  }

  @media (max-width: 360px) {
    .riph_v1_baner_left {
      .coin-info {
        font-size: 13px;
      }
    }
  }
`;

export default BannerV1Wrapper;