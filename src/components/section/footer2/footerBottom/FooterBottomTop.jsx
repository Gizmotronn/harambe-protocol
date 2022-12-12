import FooterBottomStyleWrapper from "./FooterBottom.style";
import data from "../../../../assets/data/socialProfile";
import backToTopIcon from "../../../../assets/images/icon/back_to_top.svg";
import logo from "../../../../assets/riph/rambecenter.png";

const FooterBottomTop = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom">
      <div className="footer_bottom_content">
        <div className="container">
          <div className="footer_menu">
            <div className="bottom_footer_left">
              <div className="copyright_text">
                <img src={logo} height="35%" width="35%" />
              </div>
            </div>
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

export default FooterBottomTop;