import { Slider, SliderItem } from "../../../../common/slider/Slider";
import data from "../../../../assets/data/characterSlider/characterSlider";
import SectionTitle from "../../../../common/sectionTitle";
import HowToMintWrapper from "../../howToMint/v1/HowToMint.style";

import CharacterSliderWrapper from "./CharacterSlider.style";

const CharacterSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <center>
      <CharacterSliderWrapper>
      <HowToMintWrapper>
        <div className="container how_to_mint_container">
          <center><SectionTitle
            classNameName="md-pb-20"
            title="OUR PARTNERS"
          /></center>
        </div>
      </HowToMintWrapper>
      <Slider {...settings}>
        {data?.map((item, i) => (
          <SliderItem key={i}>
            <div className="character-thumb">
              <img src={item.thumb}/>
            </div>
          </SliderItem>
        ))}
      </Slider>
    </CharacterSliderWrapper>
    </center>
    </div>
  );
};

export default CharacterSlider;
