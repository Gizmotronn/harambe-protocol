//import CTA from "../../cta/v1";
import { FaDiscord, FaTwitter, FaWallet, FaInstagram, FaFacebook } from "react-icons/fa";
import { footerLinksV1 } from "../../../assets/data/insiteLinks.js";
import footerLogo from "../../../assets/riph/sitelogo.png";
import backToTopIcon from "../../../assets/images/icon/back_to_top.svg";

import characterShape from "../../../assets/images/nft/3_chr_img.png";
import footerShapesLeft from "../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../assets/images/icon/footer_shapes_right.png";

import FooterStyleWrapper from "./Footer.style";
const Footer12 = () => {
  return (
    <FooterStyleWrapper>
      {/*<CTA />*/}

      <div className="bithu_v1_main_footer">
        {/*<div className="bithu_v1_main_footer_overlay"></div>
        <div className="three_charectre_img">
          <img src={characterShape} alt="bithu nft character" />
  </div>*/}

        <div className="footer_bottom">
          <div className="footer_bottom_content">
            {/*<span className="footer_shapes_left">
              <img src={footerShapesLeft} alt="bithu nft footer" />
            </span>
            <span className="footer_shapes_right">
              <img src={footerShapesRight} alt="bithu nft footer" />
  </span>*/}
            <div className="container">
              <div className="footer_menu">
                <div className="bottom_footer_left">
                  {/*<div className="footer_logo">
                    <a href="# ">
                      <img src={footerLogo} alt="hp logo" />
                    </a>
                    
  </div>*/}
                  <div className="copiright_text">
                    
                    <p>
                    <div className="mobile_menu_social_links">
                      <ul>
                        <li>
                          <a href="/staking">Staking</a>
                        </li>
                        <li>
                          <a href="/staking">Staking</a>
                        </li>
                        <li>
                          <a href="/staking">Staking</a>
                        </li>
                        <li>
                          <a href="/staking">Staking</a>
                        </li>
                      </ul>
                      <p>
                        <a href="# ">
                          <FaDiscord />
                        </a>
                        &nbsp;
                        &nbsp;
                        <a href="# ">
                          <FaTwitter />
                        </a>
                        &nbsp;
                        &nbsp;
                        <a href="# ">
                          <FaFacebook />
                        </a>
                        &nbsp; 
                        &nbsp;
                        <a href="# ">
                          <FaInstagram />
                        </a>
                        &nbsp;
                        &nbsp;
                        <a href="# ">
                          <FaWallet />
                        </a>
                      </p>
                    </div>
                      Copyright © 2022 Rambe Games
                    </p>
                  </div>
                </div>
                <a href="# " className="bact_to_top_btn">
                  <img src={backToTopIcon} alt="hp back to top" />
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

export default Footer12;