import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  grid-template-columns: 0.5fr 1fr 0.5fr;
`;
const HeaderWrapper = styled.div`
  grid-column: 1/4;
  grid-row: 1;
  background-color: lightblue;
`;
const UsersWrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: yellow;
`;
const TeamFirstWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  background-color: black;
`;
const TeamSecondWrapper = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-color: red;
`;

const RoomDetailsTemplate = ({ activeRoom }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <HeaderWrapper>
        {activeRoom.teamFirst.name} vs {activeRoom.teamSecond.name}
      </HeaderWrapper>
      <TeamFirstWrapper>teamfirst</TeamFirstWrapper>
      <UsersWrapper>users</UsersWrapper>
      <TeamSecondWrapper>second</TeamSecondWrapper>
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
    }),
  ).isRequired,
};
PropTypes.defaultProps = {
  activeRoom: [],
};

export default RoomDetailsTemplate;
