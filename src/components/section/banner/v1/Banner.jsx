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
                Cryropods containing unique Purebred Harambians
              </h3>
              <div className="banner_buttons">
                <Button lg variant="outline" border-radius="20px">
                  Register
                </Button>
              </div>
              <div className="coin-info">
                <span color='#cc1010'>Max TBA Harambians per wallet</span> {/* Bolden the TBA */}
                <span>Public mint price: TBA</span>
                <span>ERC20 Presale : Launching on Opensea</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="riph_v1_baner_right">
              <div className="riph_v1_baner_right_img_sect">
                <div className="riph_v1_baner_right_img">
                <img src={harambe} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;