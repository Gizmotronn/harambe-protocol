import data from "../../../../../assets/data/footer/footerLinks";

import footerLogo from "../../../../../assets/images/logo.png";
import backToTopIcon from "../../../../../assets/images/icon/back_to_top.svg";
import footerShapesLeft from "../../../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../../../assets/images/icon/footer_shapes_right.png";

import FooterBottomStyleWrapper from "./FooterBottom.style";
const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="riph_v2_main_footer">
      <div className="v2_main_footer">
        <div className="v2_footer_menu">
          <div className="v2_footer_logo">
            <a href="# ">
              <img src={footerLogo} alt="riph nft logo" />
            </a>
          </div>
          <div className="bottom_footer_menulist">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="v2_footer_copiright_text">
            <p>Copyright ©2022 Riph.io & Liam Arbuckle, All rights reserved.</p>
          </div>
          <a href="# " className="bact_to_top_btn">
            <img src={backToTopIcon} alt="riph nft back to top" />
          </a>
        </div>
      </div>
      <span className="v2_footer_shapes_left">
        <img src={footerShapesLeft} alt="riph nft footer" />
      </span>
      <span className="v2_footer_shapes_right">
        <img src={footerShapesRight} alt="riph nft footer" />
      </span>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
