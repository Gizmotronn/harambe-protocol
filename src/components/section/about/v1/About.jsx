import SectionTitle from "../../../../common/sectionTitle";

import AboutInfoCardList from "../aboutInfoCardList";

import data from "../../../../assets/data/about/aboutv1";
import aboutThumb1 from "../../../../assets/images/nft/about_us_img1.png";
import aboutThumb2 from "../../../../assets/images/nft/about_us_img2.png";
import harambe from "../../../../assets/riph/harambe1.png";
import h1 from "../../../../assets/riph/h1.png";
import h2 from "../../../../assets/riph/h2.png";
import AboutStyleWrapper from "./About.style";
import RiphDropdown from "../../faq/riph-dropdown/Faq";

const About = () => {
  const { aboutDescription1, aboutDescription2 } = data;
  return (
    <AboutStyleWrapper id="about">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-md-6">
            <div className="v1_about_us_right_sect">
              <center><SectionTitle title="ASCENSION"/></center>
              <div className="v1_about_us_right_text"> {/* ASCENSION Logo */}
                <center><h1>A META-CITY OF ORDER & CHAOS</h1></center>
                <p>
                  An immersive MMO game of cooperation & deception as the Harambians awake from their Cryopods with no memory of their past, having to rebuild their society.
                </p>
                <p>
                  As the competing districts fight for power, players must form alliances and work together to overcome the opposition through PvP combat, resource farming and global trades; building the most powerful economy.
                </p>
                <p>
                  However, each district has a hierarchy, the higher you are the more perks and rewards you receive... The more players within your district that want your position. You must lead a successful economy whilst also watching your back.
                </p>
                <p>
                  Will greed and deceit undo your districts economy? Or will the chaos make it thrive?
                </p>
                
              </div>
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="v1_about_us_left_sect sm-mt-60">
            
              <div className="v1_about_us_img_card v1_about_us_img_card1">
              
                <div className="v1_about_us_img v1_about_us_img1">
                  <img src={h1} alt="img" />
                </div>
                <div className="v1_about_us_img1_shapes">
                  <div className="v1_about_us_img1_shapes_left">
                    <div className="shape_1"></div>
                    <div className="shape_2"></div>
                  </div>
                  <div className="v1_about_us_img1_shapes_right">
                    <div className="shape_3"></div>
                  </div>
                </div>
              </div>
              <div className="v1_about_us_img_card v1_about_us_img_card2">
                <div className="v1_about_us_img v1_about_us_img2">
                  <img src={h2} alt="img" />
                </div>
                <div className="v1_about_us_img2_shapes">
                  <div className="v1_about_us_img2_shapes_left">
                    <div className="shape_1"></div>
                    <div className="shape_2"></div>
                  </div>
                  <div className="v1_about_us_img2_shapes_right">
                    <div className="shape_3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <RiphDropdown />
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
