import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import GoogleMaps from 'components/molecules/GoogleMaps/GoogleMaps';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import football from 'assets/icons/football.svg';
import basketball from 'assets/icons/basketball.svg';
import voleyball from 'assets/icons/voleyball.svg';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.05fr 1fr;
  position: fixed;
`;
const StyledRoomsList = styled.div`
  background-color: ${({ theme }) => theme.grey100};
  grid-column: 1;
  grid-row: 2;
  padding: 1rem;
  padding-top: 0;
  display: block;
  overflow-y: auto;
  height: 89vh;
`;

const StyledGoogleMap = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

const SearchBar = styled.div`
  grid-column: 1;
  padding: 1rem;
  display: flex;
  margin-right: 1rem;
`;

const SearchInput = styled(Input)`
  height: 40px;
  margin-top: 1.4rem;
`;

const FilterIcon = styled(ButtonIcon)`
  background-color: white;
`;

const WrappedMap = withScriptjs(withGoogleMap(GoogleMaps));

const RoomsTemplate = ({ children, rooms, setDiscipline }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <SearchBar>
        <SearchInput search placeholder="Search" />
        <FilterIcon
          icon={football}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline(null)}
        />
        <FilterIcon
          icon={voleyball}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('voleyball')}
        />
        <FilterIcon
          icon={basketball}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('basketball')}
        />
        <FilterIcon
          icon={football}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('football')}
        />
        <FilterIcon
          icon={basketball}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('basketball')}
        />
        <FilterIcon
          icon={football}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('football')}
        />
        <FilterIcon
          icon={basketball}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('basketball')}
        />
        <FilterIcon
          icon={voleyball}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('voleyball')}
        />
        <FilterIcon
          icon={football}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('football')}
        />
        <FilterIcon
          icon={voleyball}
          activeclass="activeSearchBar"
          onClick={() => setDiscipline('voleyball')}
        />
      </SearchBar>
      <StyledRoomsList>{children}</StyledRoomsList>
      <StyledGoogleMap>
        <WrappedMap
          rooms={rooms}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpnL2RVezim_QQ9s_Eey-gUz81VjGYf6g&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `88vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </StyledGoogleMap>
    </StyledWrapper>
  </UserPageTemplate>
);

RoomsTemplate.propTypes = {
  children: PropTypes.isRequired,
  rooms: PropTypes.arrayOf({ id: PropTypes.number.isRequired, place: PropTypes.string.isRequired }),
  setDiscipline: PropTypes.string.isRequired,
};

RoomsTemplate.defaultProps = {
  rooms: [],
};
export default RoomsTemplate;
