import TeamMemberStyleWrapper from "./TeamMember.style";
import hoverShape from "../../../../assets/images/icon/hov_shape_L.svg";

const TeamMember = ({ avatar, name, designation, socialLinks }) => {
  return (
    <TeamMemberStyleWrapper>
      <div className="bithu_team_card">
        <center>
          <div className="team_member_img">
            <img src={avatar} alt="bithu nft team avatar" height="45%" width="45%" />
          </div>
        </center>
        <div className="bithu_team_card">
          <img src={avatar} height="25%" width="25%" />
        </div>
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
