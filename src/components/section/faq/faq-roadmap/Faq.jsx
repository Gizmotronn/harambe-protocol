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
import data from "../../../../assets/data/roadmap";
import FAQStyleWrapper from "./Faq.style";

// roadmap images inside of boxes (preferable) or to the left of the boxes
// Increase margin-gap between roadmap-faq items

const FAQRoadmap = () => {
  const handleExpand = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <FAQStyleWrapper className="riph_faq_sect" id="roadmap">
      <div className="container">
        <div className="riph_faq_content">
          <SectionTitle
            isCenter={true}
            title="ROADMAP"
            className="text-center"
          />

          <div className="riph_faq_questions">
            <Accordion className="faq_questions">
              {data?.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionTitle handleExpand={handleExpand}>
                    <p>{item.image}</p> {/* width="67%" height="67%" */}
                    <h5>{item.title}</h5> {/* Center the text between the image and the accordion active button */}
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
          </div>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQRoadmap;
