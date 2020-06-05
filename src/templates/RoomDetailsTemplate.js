import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div``;

const RoomDetailsTemplate = ({ activeRoom }) => (
  <UserPageTemplate>
    <StyledWrapper>{activeRoom.id}</StyledWrapper>
  </UserPageTemplate>
);

RoomDetailsTemplate.propTypes = {
  activeRoom: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
      slots: PropTypes.number.isRequired,
      levelSkill: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      disciplineAvatar: PropTypes.string.isRequired,
      teamSecond: PropTypes.string.isRequired,
      teamFirst: PropTypes.string.isRequired,
      ownerUser: PropTypes.string.isRequired,
      disciplineType: PropTypes.string.isRequired,
      roomStatus: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
PropTypes.defaultProps = {
  activeRoom: [],
};

export default RoomDetailsTemplate;
