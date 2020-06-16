import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import footballpitch from 'assets/icons/footballpitch.svg';
import fcbarcelona from 'assets/icons/fcbarcelona.svg';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.35fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 4rem 0 4rem;
  height: 100vh;
`;

const TeamFirstLogoWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  display: block;
`;
const TeamSecondLogoWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  text-align: center;
  display: block;
`;

const MatchInfoWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  text-align: center;
`;

const ListInfoWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListLiItem = styled.li`
  border-bottom: 1px solid lightgrey;
  padding: 1rem;
`;

const ScoreWrapper = styled.div`
  background-color: ${({ theme }) => theme.blue};
  height: 50px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const UsersWrapper = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-size: cover;
  margin: 20px;
`;
const PitchWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  background: url(${footballpitch}) no-repeat;
  background-position: 50%;
  margin: 20px;
  background-size: 100vh;
`;

const StyledHeading = styled(Heading)`
  padding-top: 0.3rem;
  color: black;
`;

const RoomDetailsTemplate = ({ activeRoom }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <TeamFirstLogoWrapper>
        <StyledHeading> Team {activeRoom.teamFirst.name} </StyledHeading>
        <img src={fcbarcelona} alt="teamSecondLogo" />
      </TeamFirstLogoWrapper>
      <MatchInfoWrapper>
        <ScoreWrapper>
          <StyledHeading big>
            {activeRoom.scoreTeamFirst} : {activeRoom.scoreTeamSecond}
          </StyledHeading>
        </ScoreWrapper>
        <ListInfoWrapper>
          <ListLiItem>{activeRoom.eventDate}</ListLiItem>
          <ListLiItem>{activeRoom.place.name}</ListLiItem>
          <ListLiItem>
            {activeRoom.place.city}, {activeRoom.place.street}
          </ListLiItem>
        </ListInfoWrapper>
      </MatchInfoWrapper>
      <TeamSecondLogoWrapper>
        <StyledHeading> Team {activeRoom.teamSecond.name} </StyledHeading>

        <img src={fcbarcelona} alt="teamSecondLogo" />
      </TeamSecondLogoWrapper>
      <PitchWrapper />
      <UsersWrapper>
        <StyledHeading> Użytkownicy </StyledHeading>
        <ListInfoWrapper>
          {activeRoom.users.map(({ fullName }) => (
            <ListLiItem>{fullName}</ListLiItem>
          ))}
        </ListInfoWrapper>
      </UsersWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

RoomDetailsTemplate.propTypes = {
  activeRoom: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      place: PropTypes.objectOf.isRequired,
      slots: PropTypes.number.isRequired,
      levelSkill: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      disciplineAvatar: PropTypes.string.isRequired,
      teamSecond: PropTypes.objectOf(PropTypes.shape({ name: PropTypes.string.isRequired }))
        .isRequired,
      teamFirst: PropTypes.objectOf(PropTypes.shape({ name: PropTypes.string.isRequired }))
        .isRequired,
      ownerUser: PropTypes.objectOf.isRequired,
      disciplineType: PropTypes.string.isRequired,
      roomStatus: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      map: PropTypes.function.isRequired,
    }),
  ).isRequired,
};
PropTypes.defaultProps = {
  activeRoom: [],
};

export default RoomDetailsTemplate;
