import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../../images/team/crew_avatar1.png";
import avatarThumb2 from "../../images/team/crew_avatar2.png";
import avatarThumb3 from "../../images/team/crew_avatar3.png";
import avatarThumb4 from "../../images/team/v2_team_4.png";
import avatarThumb5 from "../../images/team/crew_avatar5.png";
import avatarThumb6 from "../../images/team/crew_avatar6.png";
import avatarThumb7 from "../../images/team/crew_avatar7.png";
import avatarThumb8 from "../../images/team/crew_avatar8.png";
import Alex from "../../riph/Alex.jpg";
import Jai from "../../riph/BigTurnz.png";
import KYU from "../../riph/KYU.jpg";

const data = [
  {
    avatar: Jai,
    name: "Jai Turner",
    designation: "Founder",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
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
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  },
  {
    avatar: KYU,
    name: "KYU",
    designation: "Artist",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  },
  {
    avatar: avatarThumb4,
    name: "Anna",
    designation: "Community",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
      {
        icon: <FaInstagram />,
        url: "#",
      },
    ],
  }
  
];

export default data;
