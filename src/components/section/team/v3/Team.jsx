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
