import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
import Counter from "../components/section/counter";
import CharacterSlider from "../components/section/characterSlider/v1";
import HowToMint from "../components/section/howToMint/v1";
import About from "../components/section/about/v1";
import Team from "../components/section/team/v3";
import FAQ from "../components/section/faq/v1";
import Footer from "../components/section/footer/v1";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import video from "../assets/riph/video.mp4";
import video1 from "../assets/riph/video2.mp4";
import roadmapImg from "../assets/riph/Roadmap.png";
import CharacterSlider2 from "../components/section/characterSlider/v3/";
import CustomForm from "../components/mailchimp";
import FAQRoadmap from "../components/section/faq/faq-roadmap/Faq";
import newBg from "../assets/riph/riph-bg-again.png";
import About2 from "../components/section/about/v2/About";
import Team2 from "../components/section/team/v4";
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
      {/*<About2 />*/}
      {/*<center>
        <video src={video} autoPlay="true" loop="true" width="100%" height="30%"/>
  </center>*/}
      <About /> {/* Game debrief*/} {/* Add another ABOUT US section below the team section -> specifically about Rambe games */}
      <Banner />
      <CharacterSlider2 /> {/* Will change nft card design later, curve with border-radius for now */}
      <center><Counter /></center>
      <center> {/* Move this video into a styled component and add top and bottom padding/border aligned with rest of global styles */}
        <video src={video1} width="100%" height="30%" autoPlay={true} loop="true" border-radius="15px" />
      </center>
      <HowToMint />
      <Team />
      <CharacterSlider /> 
      {/* Add another signup form here */}
      <Footer />
      
    </Layout>
  );
};

export default HomeV1;