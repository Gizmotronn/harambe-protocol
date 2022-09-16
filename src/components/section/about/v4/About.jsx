import SectionTitle from "../../../../common/sectionTitle";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Counter from "../../../../common/counter";

import aboutImageLeft from "../../../../assets/images/nft/about_image_left.png";
import aboutImageRight from "../../../../assets/images/nft/about_image_right.png";
import AboutInfoCardList from "../aboutInfoCardList";
import AboutStyleWrapper from "./About.style";

// Mint/stake functionality
import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';
import WristbandNFT from './WristbandNFT.json';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const roboPunksNFTAddress = "0xA0Ba4E895447770cBf0ff998d3DBa0a08496CE90";
const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const About = ({ accounts, setAccounts }) => {
  {/*
  const [mintAmount, setMintAmount] = useState(1); // 1 by default in state
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum); // ethers provider used to connect to the blockchain
      const signer = provider.getSigner();
      const contract = new ethers.Contract( // Use contract functions/methods
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer,
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log('response: ', response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount => 3) return; // prevent user from interacting with >3 tokens at a time (in a single transaction)
    setMintAmount(mintAmount + 1);
  }
*/}

  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="STAKING"
        />
        <div className="v2_about_us_content">
          <Flex justify="center" align="center" height="100vh" paddingBottom="150px">

          </Flex>
          <div className="v2_about_us_text">
            <p>
              COMING SOON
            </p>
            <p>
            COMING SOON
            </p>

            <div className="counter-wrap">
              <h4>
              COMING SOON <Counter end="9999" />{" "}
              </h4>
              <h4>
              COMING SOON <Counter end="555" />
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
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
