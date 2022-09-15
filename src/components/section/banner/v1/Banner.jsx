import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import { useEffect, useState } from "react";
import { totalMintCount } from '../../../../utils/web3mint';
import harambe from '../../../../assets/riph/harambe1.png'
import clickAudio from "../../../../assets/riph/sound1.mp3";

const Banner = () => {
  const audio = new Audio(clickAudio);
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();
  const [remaining, setRemaining] = useState(0);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      console.log(totaltMintedItems);
      setRemaining(totaltMintedItems);
    }

    calculateRemainingItems();
  },[])
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="riph_v1_baner_left">
              <h2>MINTING SOON!</h2>
              <h3>
               {/*<span className="count">
                  <Counter end={remaining} duration={remaining} />
  </span>{" "}*/}
                5,000 Cryropods containing unique Purebred Harambians
              </h3>
              <div className="banner_buttons">
                {/*{
                  account ? 
                  <Button lg variant="mint" onClick={() => mintModalHandle()}>
                    {" "}
                    Mint now
                  </Button> :
                  <Button lg variant="mint" onClick={() => audio.play()}> {/*onClick={() => connectWalletModalHanlde() -> Later, add these two onClick events in the same function*/} {/*
                    {" "}
                    Mint now
                  </Button> 
                }*/}
                <Button lg variant="outline" border-radius="20px">
                  Register
                </Button>
              </div>
              <div className="coin-info">
                <span>Max 10 Harambians per wallet</span>
                <span>Public mint price: 0.1 ETH + GAS</span>
                {/*<span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 25 SEP 04:00H</span>
              </span>*/}
                <span>ERC20 Presale : Launching on Opensea</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="riph_v1_baner_right">
              <div className="riph_v1_baner_right_img_sect">
                {/*<div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
              </div>
                </div>*/}
                {/*<div className="riph_v1_baner_right_img_bg">
                  <img src={homeImageBG} alt="" />
              </div>*/}
                <div className="riph_v1_baner_right_img">
                  
                </div>
              </div>
            </div>
            <img src={harambe} height="100%" />
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;

// Roadmap -> duplicate the FAQ section & add images  #TODO