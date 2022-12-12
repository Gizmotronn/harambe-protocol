import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import Footer3 from "../components/section/footer/v3";

const HomeV1 = () => {
  const { visibility, walletModalvisibility, metamaskModalVisibility, connectWalletModal } = useModal();
  return (
    <Layout>
      <GlobalStyles /> 
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal/> }
      {connectWalletModal && <ConnectWallet/> }
      <Header />
      <Footer3 />
      {/*<About2 />
      <center>
        <video src={video} autoPlay="true" loop="true" width="100%" height="30%"/>
  </center>*/}{/*
      <About />
      <AboutInfoCardList />
      {/*<Banner /> {/* Game debrief* {/* Add another ABOUT US section below the team section -> specifically about Rambe games *
      <CharacterSlider2 /> {/* Will change nft card design later, curve with border-radius for now */}
      {/*<center><Counter /></center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*<center>  Move this video into a styled component and add top and bottom padding/border aligned with rest of global styles 
        <video src={video1} width="100%" height="30%" autoPlay={true} loop="true" border-radius="15px" muted/>
      </center>
      <HowToMint />
      <Team />
      <CharacterSlider /> 
      {/* Add another signup form here 
      <Footer />
  <Footer12 />*/}
    </Layout>
  );
};

export default HomeV1;