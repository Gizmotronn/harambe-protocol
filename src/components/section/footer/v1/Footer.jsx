import CTA from "../../cta/v1";

import { footerLinksV1 } from "../../../../assets/data/insiteLinks";
import footerLogo from "../../../../assets/images/logo.png";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";

import characterShape from "../../../../assets/images/nft/3_chr_img.png";
import footerShapesLeft from "../../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../../assets/images/icon/footer_shapes_right.png";
import harambe from "../../../../assets/riph/harambe1.png"

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <div className="riph_v1_main_footer">
        <div className="footer_bottom">
          <div className="footer_bottom_content">
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  <div className="copiright_text">
                    <p>Copyright ©2022 Riph.io & Liam Arbuckle</p>
                  </div>
                </div>
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="riph nft back to top" />
                </a>
                <div className="bottom_footer_right">
                  <ul>
                    {footerLinksV1?.map((item, i) => (
                      <li key={i}>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyleWrapper>
  );
};

export default Footer;
