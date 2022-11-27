import AboutCard from "./aboutCard/AboutCard";
import data from "../../../../assets/data/about/aboutv1";
import AboutInfoCardListWrapper from "./AboutInfoCardList.style";
const AboutInfoCardList = () => {
  const { aboutInfo } = data; 
  return (
    <AboutInfoCardListWrapper className="about_us_text_card_sect">
      <center><div className="row">
        {aboutInfo?.map((item, i) => (
          <div key={i} className="col-md-4">
            <AboutCard {...item} />
          </div>
        ))}
      </div></center>
    </AboutInfoCardListWrapper>
  );
};

export default AboutInfoCardList;
