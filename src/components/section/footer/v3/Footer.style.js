import styled from "styled-components";
import footerBG from "../../../../assets/riph/riph-bg-again1.jpg";
import ventBg from "../../../../assets/riph/dvstrip.png";

const FooterStyleWrapper = styled.footer`
  a { 
    display: block;
    text-decoration: none;
    color: inherit;
  }
  p {
    margin-bottom: 0;
  }
  /* footer top  */
  .top-footer-content {
    min-height: 730px;
    padding-top: 200px;
    background: url(${footerBG});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; 
    overflow: hidden;

    .footer_image {
      padding-right: 55px;
      background: url(${ventBg});
      p {
        margin-top: 45px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .footer-menu {
      .menu-title {
        color: #fff;
        margin-bottom: 16px;
      }
      ul {
        margin: 0;
        padding: 0;

        li {
          line-height: 45px;
          a {
            color: rgba(255, 255, 255, 0.7);
            transition: 0.4s;
          }
        }
      }
    }

    .footer_newsletter {
      .form-box {
        position: relative;
        border-radius: 15px;
      }
      input,
      button {
        height: 60px;
        border-radius: 15px;
        &:focus {
          outline: none;
        }
      }
      input {
        width: 100%;
        background: #ffffff;
        
        color: rgba(255, 255, 255, 0.7);

        line-height: 60px;
        border: 2px solid #ffffff;
        padding: 0 20px;
      }

      button {
        height: 100%;
        width: 70px;
        position: absolute;
        right: 0;
        background: #ad2f2f;
        border: none;
        transition: all 0.3s;

        &:hover {
          background-color: #750707;
        }
      }
    }
  }

  .bithu_v1_baner_right {
    max-width: 500px;
    width: 100%;
    margin-left: auto;

    .mint_live_circle_sect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 50%;
      border: none;
      background: #ffe600;
      position: absolute;
      top: -65px;
      left: -65px;
      z-index: 1;

      .mint_live_circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .mint_live_text {
          position: absolute;
        }
      }
    }

    .bithu_v1_baner_right_img_sect {
      position: relative;
      width: 100%;
      height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;

      .bithu_v1_baner_right_img_bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .bithu_v1_baner_right_img {
        position: relative;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .top-footer-content{
      
    .footer_image{
      margin-bottom: 0px;
      p {
        margin-top: 0px;
    }
    }

    .footer-menu{
      .menu-title{
        margin-bottom: 16px;
      }
    }
  }
  }
  @media only screen and (max-width: 667px) { 
    .top-footer-content{
 

    .footer-menu{
      .menu-title{
        margin-bottom: 16px;
      }
    }

    .footer_newsletter{
      margin-top: 30px;
      padding-right: 50px;
    }
  }
  }
  @media only screen and (max-width: 540px) { 
    .top-footer-content{
 
      .link-widgets{
        width: 50%;
      }
 
  }
  }
  @media only screen and (max-width: 375px) { 
    .top-footer-content{
 
      .footer_newsletter{
        padding-right:0;
      }
 
  }
  }
  
  
`;

export default FooterStyleWrapper;
