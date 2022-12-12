import FooterBottomStyleWrapper from "./FooterBottom.style";
import data from "../../../../assets/data/socialProfile";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";

const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom">
      <div className="footer_bottom_content">
        <div className="container">
          <div className="footer_menu">
            <div className="bottom_footer_left">
              <div className="copyright_text">
              Copyright ©2022 Rambe Games. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;