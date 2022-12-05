import TeamMemberStyleWrapper from "./TeamMember.style";
import hoverShape from "../../../../assets/images/icon/hov_shape_L.svg";
 
const TeamMember = ({ avatar, name, designation, socialLinks, harambe }) => {
  return ( 
    <TeamMemberStyleWrapper>
      <div className="riph_team_card">
        <center>
          <div className="team_member_img">
            <img src={avatar} alt="riph nft team avatar" height="85%" width="85%" />
            <img class="harambian" src={harambe} height="7%" width="7%" />
          </div>
        </center>
        <h3>{name}</h3>
        <h4>{designation}</h4>
      </div>
    </TeamMemberStyleWrapper>
  );
};

export default TeamMember;