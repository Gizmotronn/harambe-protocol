import styled from "styled-components";

const CoinInfoCounterWrapper = styled.section`
  background: rgba(33, 33, 33, 0.7);
  min-height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    position: relative;
    padding: 0;
    margin: 0;
    li {
      width: 25%;
      h3 {
        font-family: "PT Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 36px;
        text-transform: uppercase;
        color: #ffffff;
      }
      h4 {
        font-family: "PT Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  .bg-shape {
    position: absolute;
    border-radius: 15px;

    &.shape-left {
      left: 0;
    }

    &.shape-top {
      top: 0;
    }
    &.shape-bottom {
      bottom: 0;
    }

    &.shape-right {
      right: 0;
      transform: rotate(90deg);
    }
  }

  @media only screen and (max-width: 991px) {
    ul {
      li {
        h3 {
          font-size: 35px;
        }
        h4 {
          font-size: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    ul {
      flex-wrap: wrap;
      padding: 15px 0px;

      li {
        width: 50%;
        padding: 15px 0px;
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    ul {
      flex-wrap: nowrap;
      flex-direction: column;

      li {
        width: 100%;
      }
    }
  }
`;

export default CoinInfoCounterWrapper;
