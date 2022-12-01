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
              Copyright ©2022 Rambe Games
              </div>
            </div>
            <a href="# " className="bact_to_top_btn">
              <img src={backToTopIcon} alt="bithu nft back to top" />
            </a>
            <div className="bottom_footer_right">
              <ul>
                {data?.map((item, i) => (
                  <li key={i}>
                    <a href={item.url}>
                      {item.thumb ? (
                        <img src={item.thumb} alt="bithu nft social" />
                      ) : (
                        item.icon
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;