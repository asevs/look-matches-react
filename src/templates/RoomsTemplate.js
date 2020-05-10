import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import GoogleMaps from 'components/molecules/GoogleMaps/GoogleMaps';
import { withScriptjs, withGoogleMap } from 'react-google-maps';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const StyledRoomsList = styled.div`
  background-color: ${({ theme }) => theme.grey100};
  grid-column: 1;
  padding: 1rem;
  padding-top: 0;
`;

const StyledGoogleMap = styled.div`
  grid-column: 2;
`;

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps));

const RoomsTemplate = ({ children, rooms }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledRoomsList>{children}</StyledRoomsList>
      <StyledGoogleMap>
        <WrappedMap
          rooms={rooms}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpnL2RVezim_QQ9s_Eey-gUz81VjGYf6g&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </StyledGoogleMap>
    </StyledWrapper>
  </UserPageTemplate>
);

RoomsTemplate.propTypes = {
  children: PropTypes.isRequired,
  rooms: PropTypes.arrayOf({ id: PropTypes.number.isRequired, place: PropTypes.string.isRequired }),
};

RoomsTemplate.defaultProps = {
  rooms: [],
};
export default RoomsTemplate;
