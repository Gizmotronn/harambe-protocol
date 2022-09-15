import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import avatarThumb1 from "../../images/team/v2_team_1.png"; 
import avatarThumb2 from "../../images/team/v2_team_2.png"; 
import avatarThumb3 from "../../images/team/v2_team_3.png"; 
import avatarThumb4 from "../../images/team/v2_team_4.png"; 
import jai from "../../riph/BigTurnz.png";

const data = [
  {
    avatar: jai,
    name: "Liam",
    designation: "Engineer",
    socialLinks: [
      {
        icon: <FaLinkedinIn />,
        url: "#",
      },
      {
        icon: <FaTwitter />,
        url: "#",
      },
    ],
  },     
];

export default data;
