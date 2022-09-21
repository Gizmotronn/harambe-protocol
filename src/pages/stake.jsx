/*import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v4/Header";
import Layout from "../common/layout";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import About2 from "../components/section/about/v4/About";
import { ethers, BigNumber } from 'ethers';
import { useState } from "react";
import roboPunksNFT from '../contracts/RoboPunksNFT.json'; // Grab the ABI from the contract
import WristbandNFT from '../contracts/WristbandNFT.json';
//import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Staker from "../contracts/Staker";

const roboPunksNFTAddress = "0xA0Ba4E895447770cBf0ff998d3DBa0a08496CE90";

const StakePage = ({ accounts, setAccounts }) => {
    /*const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts", // Give all the accounts that exist in the user's metamask extension
          });
          console.log(accounts);
          setAccounts(accounts);
      }
    }

    async function handleStake() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum); // Ethers provider to provide blockchain auth protocol
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          roboPunksNFTAddress,
          roboPunksNFT.abi,
          signer
        );
        try {
          const response = await contract.mint(BigNumber.from(mintAmount), {
            value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
          });
          console.log('response: ', response);
        } catch (err) {
          console.log('error: ', err)
        }
      }
    }

    const handleDecrement = () => {
      if (mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
      if (mintAmount >= 3) return;
      setMintAmount(mintAmount + 1);
    };*/

    /*const { visibility, walletModalvisibility, metamaskModalVisibility, connectWalletModal } = useModal();

    return (
      <Layout>
        <GlobalStyles /> 
        {visibility && <MintNowModal />}
        {walletModalvisibility && <WalletModal />}
        {metamaskModalVisibility && <MetamaskModal/> }
        {connectWalletModal && <ConnectWallet/> }
        <Header />
        {/*<Flex justify="center" align="center" height="100vh" paddingBottom="150px">
            <Box width="520px">
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">Star Sailors</Text>
                    <Text
                        fontSize="30px"
                        letterSpacing="-5.5%"
                        fontFamily="VT323"
                        textShadow="0 2px 2px #000000"
                    >
                        Preorder Star Sailors characters, items and components here
                    </Text>
                </div>
                    <div>
                        <Flex align="center" justify="center">
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                            onClick={handleDecrement}>-</Button>
                            <Input
                                readOnly
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="19px"
                                marginTop="10px"
                            type="number" value={mintAmount} />
                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="10px"
                            onClick={handleIncrement}>+</Button>
                         </Flex>
                        <Button
                            backgroundColor="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            marginTop="10px"
                        onClick={handleStake}>Mint now</Button>
                    </div>
            </Box>
    </Flex>}
        /*<About2 />
        <Staker />
      </Layout>
    );
  };
  
  export default StakePage;*/