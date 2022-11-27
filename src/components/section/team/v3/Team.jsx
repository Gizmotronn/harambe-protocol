import SectionTitle from "../../../../common/sectionTitle";
import TeamMember from "../teamMember";
import data from "../../../../assets/data/team/teamMembersV1";
import TeamStyleWrapper from "./Team.style";

const Team = () => {
  return (
    <TeamStyleWrapper>
      <div className="riph_team_sect v1_team_sect" id="team">
        <div className="v1_team_overlay">
          <div className="container">
            <SectionTitle
              title="OUR TEAM"
              isCenter={true}
              className="text-center"
            />
            <div className="riph_team_content">
              <div className="row">
                {data?.map((member, i) => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 center">
                    <center><TeamMember {...member} /></center>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;

{/*
import SectionTitle from "../../../../common/sectionTitle";
import TeamMember from "../teamMember";
import data from "../../../../assets/data/team/teamMembersV1";
import TeamStyleWrapper from "./Team.style";
import TeamMemberStyleWrapper from "./../teamMember/TeamMember.style";

import Alex from "../../../../assets/riph/Alex.jpg";
import Jai from "../../../../assets/riph/BigTurnz.jpeg";

const Team = () => {
  return (
    <TeamStyleWrapper>
      <div className="riph_team_sect v1_team_sect" id="team">
        <div className="v1_team_overlay">
          <div className="container">
            <SectionTitle
              title="OUR TEAM"
              isCenter={true}
              className="text-center"
            />
            <div className="riph_team_card">
            <div className="riph_team_content">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 center">
                    <div className="riph_team_card">
                      <center>
                        <div className="team_member_img">
                          <img src={Alex} alt="riph nft team avatar" height="100%" width="100%" />
                        </div>
                      </center>
                      <h3>Alex Garcia</h3>
                      <h4>Project Manager</h4>
                        <div className="team_member_img">
                          <img src={Jai} alt="riph nft team avatar" height="10%" width="100%" />
                        </div>
                      <h3>Jai Turnor</h3>
                      <h4>Founder</h4>
                    </div>              
                </div>

                <br />
                <br />
                <br />
                <br />
                <center>
                {data?.map((member, i) => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 center">
                    <center><TeamMember {...member} /></center>
                  </div>
                ))} 
                </center>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </TeamStyleWrapper>
  );
};

export default Team;
*/}