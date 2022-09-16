import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaPallet, FaWallet, Pallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/riph/sitelogo.png"
import { isMetaMaskInstalled } from '../../../../config';
import Dropdown from 'react-bootstrap/Dropdown';
import video from "../../../../assets/riph/video.mp4";

const Header = () => {
  const { walletModalHandle, metamaskModalHandle, account, isWalletAlreadyConnected, disconnectWalletFromApp } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      walletModalHandle();
    }
  }
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  useEffect(() => {
    isWalletAlreadyConnected();
  },[isWalletAlreadyConnected]);

  return (
    <NavWrapper className="riph_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="riph_menu_sect">
          <div className="riph_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="riph nft logo" /> {/* Increase logo size (not header/nav menu) */}
              </a>
            </div>
          </div>
          <div className="riph_menu_right_sect riph_v1_menu_right_sect">
            <div className="riph_menu_list">
              <ul>
                {/*<li className="submenu">
                  <a href="# ">Pages +</a>
                  <div className="sub_menu_sect">
                    <ul className="sub_menu_list">
                      <li>
                        <a href="/">Home One</a>
                      </li>
                      <li>
                        <a href="/home-two">Home Two</a>
                      </li>
                      <li>
                        <a href="/home-three">Home Three</a>
                      </li>
                      <li>
                        <a href="/blogs">Latest Blog</a>
                      </li>
                      <li>
                        <a href="/post">Blog Details</a>
                      </li>
                    </ul>
                  </div>
  </li>*/}
              </ul>
            </div>
            <div className="riph_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
            
              { account ?
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className="connect_btn">
                  CONNECTED{/*{ substr(account.toString(), 15) }*/}
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="# " onClick={() => disconnectWalletFromApp() }>Disconnect</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :
              <Button
                sm
                variant="hovered"
                className="connect_btn"
                onClick={() => handleWalletConnect()}
              >
                <FaWallet />
                Connect
              </Button>

              }
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
