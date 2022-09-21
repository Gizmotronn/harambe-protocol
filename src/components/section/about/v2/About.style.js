import styled from "styled-components";
import aboutBg from "../../../../assets/riph/riph-bg-again.png";
const AboutStyleWrapper = styled.section` 
    min-height: 800px; 
    padding-top: 100px;
    padding-bottom: 0px;
    background: url(${aboutBg}); 
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative; 

    .v2_about_overlay {
        width: 100%;
        height: 70%;
        position: absolute;
        bottom: 0px;
        background: linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 0.7) 33.33%, #212121 56.77%);
        z-index: 1;
    }

    .v2_about_us_content {
        position: relative;
    }

    .v2_about_us_text {
        position: relative;
        max-width: 770px; 
        margin: 46px auto auto auto; 
        z-index: 2;
        p { 
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            margin: 0px;
        }
        p+p {
            margin: 20px 0; 
        }
    }

    .counter-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        max-width: 414px;
        width: 100%;
        margin: auto;
        margin-top: 20px;
          h4 {  
            font-size: 18px;
            line-height: 40px; 
            text-transform: uppercase;
            color: #FFFFFF;

            span{
                display: block;
                font-size: 36px;
                line-height: 40px; 
                text-transform: uppercase;
                color: #FFFFFF;
            }
        }
    }

    .top-footer-content {
        padding-top: 150px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; 
        overflow: hidden;
    
        .footer_image {
          padding-right: 55px;
          p {
            margin-top: 45px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
          }
        }
    
        .footer-menu {
          .menu-title {
            color: #fff;
            margin-bottom: 45px;
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
          }
          input,
          button {
            height: 60px;
            &:focus {
              outline: none;
            }
          }
          input {
            width: 100%;
            background: transparent;
            border: 2px solid #343d40;
            color: rgba(255, 255, 255, 0.7);
    
            line-height: 60px;
            padding: 0 20px;
          }
    
          button {
            height: 100%;
            width: 70px;
            position: absolute;
            right: 0;
            background: #00ffa3;
            border: none;
            transition: all 0.3s;
    
            &:hover {
              background-color: #00eb96;
            }
          }
        }
      }

    .v2_about_img{ 
        position: absolute; 
        top: 10px;
        z-index: 0;

        &.v2_about_img_left{
            left: 0px;
        }
        &.v2_about_img_right{
            right: 0px;
        }
    } 

    @media only screen and (max-width: 991px) {
        padding-top: 75px;
    }

    @media only screen and (max-width: 575px) {
        .v2_about_us_text {
            p {
                font-size: 13px;
                line-height: 25px;
                margin-bottom: 12px;
            }
        }
    }

    

`

export default AboutStyleWrapper;