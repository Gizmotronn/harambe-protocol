import TeamMemberStyleWrapper from "./TeamMember.style";
import hoverShape from "../../../../assets/images/icon/hov_shape_L.svg";
 
const TeamMember = ({ avatar, name, designation, socialLinks }) => {
  return ( 
    <TeamMemberStyleWrapper>
      <div className="riph_team_card">
        <center>
          <div className="team_member_img">
            <img src={avatar} alt="riph nft team avatar" height="85%" width="85%" />
          </div>
        </center>
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <div className="team_social_icon">
          <ul>
            {socialLinks?.map((item, i) => (
              <li key={i}>
                <a href={item.url}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;
