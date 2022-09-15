import SectionTitle from "../../../../common/sectionTitle";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Counter from "../../../../common/counter";

import aboutImageLeft from "../../../../assets/images/nft/about_image_left.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./About.style";

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const About = () => {
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> {/* Look at the subscribe forms (if there are any) and how they are styled from the dirivative of global styles*/}
      <center><MailchimpSubscribe 
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div> // UPDATE THE FONT TO MYRIAD PRO
      )}
    />
    </center>
      {/*<div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
          subtitle="THE STORY"
        />
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature from 45
              BC, making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur cites of the word in
              classNameical literature.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original a latin professor at
              Hampden-Sydney
            </p>

            <div className="counter-wrap">
              <h4>
                To be minted <Counter end="9999" />{" "}
              </h4>
              <h4>
                Attributes <Counter end="555" />
              </h4>
            </div>
          </div>
          <div className="v2_about_img v2_about_img_left">
            <span>
              <img src={aboutImageLeft} alt="riph nft about" />
            </span>
          </div>
          <div className="v2_about_img v2_about_img_right">
            <span>
              <img src={aboutImageRight} alt="riph nft thumb" />
            </span>
          </div>
        </div>

        {/* about card 
        <AboutInfoCardList />
      </div>*/}
    </AboutStyleWrapper>
  );
};

export default About;
