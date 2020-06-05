import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RoomDetailsTemplate from 'templates/RoomDetailsTemplate';

class DetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: {
        id: null,
        place: {
          id: null,
          city: '',
          street: '',
          lat: null,
          lng: null,
        },
        slots: null,
        levelSkill: '',
        eventDate: '',
        users: null,
        teamSecond: {},
        teamFirst: {},
        ownerUser: {},
        disciplineType: '',
        roomStatus: '',
      },
    };
  }

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`http://localhost:8080/api/room/${match.params.id}`)
      .then(({ data }) => {
        this.setState({ activeRoom: data });
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }

  render() {
    const { activeRoom } = this.state;

    return <RoomDetailsTemplate activeRoom={activeRoom} />;
  }
}

DetailsPage.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.isRequired,
};

export default DetailsPage;
