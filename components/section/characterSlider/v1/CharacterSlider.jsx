import { Slider, SliderItem } from "../../../../common/slider/Slider";
import data from "../../../../assets/data/characterSlider/characterSlider";
import SectionTitle from "../../../../common/sectionTitle";
import HowToMintWrapper from "../../howToMint/v1/HowToMint.style";

import CharacterSliderWrapper from "./CharacterSlider.style";

const CharacterSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 6,
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
    <CharacterSliderWrapper>
      <HowToMintWrapper>
        <center>
          <div className="container how_to_mint_container">
            <SectionTitle
              classNameName="md-pb-20"
              title="OUR PARTNERS"
            />
          </div>
        </center>
      </HowToMintWrapper>
      <Slider {...settings}>
        {data?.map((item, i) => (
          <SliderItem key={i}>
            <div className="character-thumb">
              <img src={item.thumb} alt="bithu nft character" />
            </div>
          </SliderItem>
        ))}
      </Slider>
    </CharacterSliderWrapper>
  );
};

export default CharacterSlider;
