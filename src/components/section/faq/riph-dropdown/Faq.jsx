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
                  <AccordionTitle handleExpand={handleExpand}>
                    <h5>{item.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <FaMinus />
                      </OpenIcon>
                      <CloseIcon>
                        <FaPlus />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p>{item.text}</p>
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
