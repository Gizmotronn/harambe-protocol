import { FaMinus, FaPlus } from "react-icons/fa";

import SectionTitle from "../../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";
import data from "../../../../assets/data/token";
import FAQStyleWrapper from "./Faq.style";
import tokenFlow from "../../../../assets/riph/tokenflow.webp";

const RiphDropdown = () => {
  const handleExpand = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <FAQStyleWrapper className="riph_faq_sect" id="faq">
      <div className="container">
        <div className="riph_faq_content">
          <div className="riph_faq_questions">
            <Accordion className="faq_questions">
              {data?.map((item, i) => (
                <AccordionItem key={i}>
                  <center><AccordionTitle handleExpand={handleExpand}>
                    <h5>$RIPH TOKEN</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <FaMinus />
                      </OpenIcon>
                      <CloseIcon>
                        <FaPlus />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle></center>
                  <AccordionBody>
                    <p>The '$RIPH' token fuels the in-game ecosystem of our MMO 'Ascension'. </p>
<p>'$RIPH' will be required to unlock all Harambian Cryopods and will be the only way to buy and unlock future Cryopods after the first mint. '$RIPH' is also stakeable for passive rewards.</p>

<p>In honour of the late Harambe, we're dedicated to passively funding gorilla conservation through our in-game NFT revenue.
</p>
<img src={tokenFlow} />
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="faq_bg_wattermark">
              {/*<img src={faqBgThumb} alt="riph nft faq" />*/}
            </div>
          </div>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default RiphDropdown;
