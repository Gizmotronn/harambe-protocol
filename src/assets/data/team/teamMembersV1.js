import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../../images/team/crew_avatar1.png";
import avatarThumb2 from "../../images/team/crew_avatar2.png";
import avatarThumb3 from "../../images/team/crew_avatar3.png";
import avatarThumb4 from "../../riph/AlexH.png"; //"../../images/team/v2_team_4.png";
import avatarThumb5 from "../../images/team/crew_avatar5.png";
import avatarThumb6 from "../../images/team/crew_avatar6.png";
import avatarThumb7 from "../../images/team/crew_avatar7.png";
import avatarThumb8 from "../../images/team/crew_avatar8.png";
import Alex from "../../riph/AlexH.png";
import Jai from "../../riph/AlexH.png"; //"../../riph/BigTurnz.png";
import KYU from "../../riph/AlexH.png"; //"../../riph/KYU.jpg";

const data = [
  {
    avatar: Jai,
    name: "Jai Turnor",
    designation: "Founder",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/jaiturnor/",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/Jai_Turnor",
      },
      
    ],
  },
  {
    avatar: Alex,
    name: "Alex",
    designation: "Project Manager",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/alex-garcia-035888226/",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/Garciawunn",
      },
      
    ],
  },
  {
    avatar: KYU,
    name: "KYU",
    designation: "Artist",
    socialLinks: [
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/okkyksy",
      },
    ],
  },
  {
    avatar: avatarThumb4,
    name: "Anna",
    designation: "Community",
    socialLinks: [
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/anna1mirskaya",
      },
    ],
  },
];

export default data;

/*
{
    avatar: Jai,
    name: "Liam Arbuckle",
    designation: "Engineer",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/in/liam-arbuckle-8bb257188/",
      },
      {
        icon: <FaTwitter />,
        url: "https://twitter.com/TheMrScrooby",
      },
      
    ],
  },
*/