import styled from "styled-components";

const CharacterSliderWrapper = styled.section`
  position: relative;
  z-index: 1;
  width: 77%;
  position: center;
  margin-top: 5px;

  .slick-slider {
    .slick-list {
      margin: 0 -15px;
    }

    .slick-slide {
      height: auto; // ← this must not be ignored
    }
    .slick-track {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
    }
  }
  .slick__slider__item {
    padding: 0 15px;
  }

  .character-thumb {
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.00);
    border-radius: 25px;
  }
`;

export default CharacterSliderWrapper;
