import React, { useState } from 'react';
import { connect } from 'react-redux';
import MatchCard from 'components/molecules/MatchCard/MatchCard';
import PropTypes from 'prop-types';
import RoomsTemplate from 'templates/RoomsTemplate';

const Rooms = ({ rooms }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  return (
    <RoomsTemplate rooms={rooms} setDiscipline={setSelectedDiscipline}>
      {rooms.map(
        ({
          id,
          place,
          slots,
          levelSkill,
          eventDate,
          users,
          disciplineAvatar,
          teamSecond,
          teamFirst,
          ownerUser,
          disciplineType,
          roomStatus,
        }) =>
          selectedDiscipline === disciplineType ? (
            <MatchCard
              id={id}
              place={place}
              slots={slots}
              levelSkill={levelSkill}
              eventDate={eventDate}
              users={users}
              disciplineAvatar={disciplineAvatar}
              teamSecond={teamSecond}
              teamFirst={teamFirst}
              ownerUser={ownerUser}
              disciplineType={disciplineType}
              roomStatus={roomStatus}
            />
          ) : (
            selectedDiscipline === null && (
              <MatchCard
                id={id}
                place={place}
                slots={slots}
                levelSkill={levelSkill}
                eventDate={eventDate}
                users={users}
                disciplineAvatar={disciplineAvatar}
                teamSecond={teamSecond}
                teamFirst={teamFirst}
                ownerUser={ownerUser}
                disciplineType={disciplineType}
                roomStatus={roomStatus}
              />
            )
          ),
      )}
    </RoomsTemplate>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.arrayOf(
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
  ),
};
Rooms.defaultProps = {
  rooms: [],
};

const mapStateToProps = ({ rooms }) => ({ rooms });

export default connect(mapStateToProps)(Rooms);
