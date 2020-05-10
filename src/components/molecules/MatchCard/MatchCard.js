import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import football from 'assets/icons/football.svg';
import Button from 'components/atoms/Button/Button';
import locationpin from 'assets/icons/locationpin.svg';
import usericon from 'assets/icons/user.svg';
import levelskillicon from 'assets/icons/levelskill.svg';
import personvsicon from 'assets/icons/personvs.svg';
// import basketball from 'assets/icons/basketball.svg';
// import voleyball from 'assets/icons/voleyball.svg';

const StyledWrapper = styled.div`
  padding: 0.8rem;
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 0.5fr 2fr 1fr 1fr;
  grid-template-rows: 40px 10px;
  height: 85px;
  background-color: white;
`;
const AvatarWrapper = styled.div`
  grid-column: 1;
`;
const InformationWrapper = styled.div`
  display: fixed;
  grid-column: 2;
  grid-row: 2;
`;

const StyledParagraph = styled(Paragraph)`
  margin-right: 1rem;
`;

const TeamsWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  grid-column: 2;
  margin: 0;
`;

const StyledHeading = styled(Heading)`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
const StyledDisciplineAvatar = styled.img`
  width: 70px;
  height: 70px;
  right: 25px;
  top: 25px;
`;
const ButtonWrapper = styled.div`
  grid-column: 4;
`;

const SlotsWrapper = styled.div``;

const StyledButton = styled(Button)`
  float: right;
  margin-right: 1.2rem;
  margin-top: 1.2rem;
  width: 150px;
`;

const DateWrapper = styled(Paragraph)`
  position: absolute;
  margin: 0;
`;

const StyledInfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 11px;
  margin-right: 3px;
`;

class MatchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      place,
      slots,
      levelSkill,
      eventDate,
      users,
      teamSecond,
      teamFirst,
      ownerUser,
    } = this.props;

    return (
      <StyledWrapper>
        <AvatarWrapper>
          <StyledDisciplineAvatar src={football} />
        </AvatarWrapper>

        <TeamsWrapper>
          <DateWrapper>{eventDate}</DateWrapper>

          <StyledHeading>
            {teamFirst} vs {teamSecond}
          </StyledHeading>
        </TeamsWrapper>
        <InformationWrapper>
          <StyledInfoIcon src={usericon} />
          <StyledParagraph>{ownerUser}</StyledParagraph>
          <StyledInfoIcon src={locationpin} />
          <StyledParagraph>
            {place.city} ul. {place.street}
          </StyledParagraph>
          <StyledInfoIcon src={levelskillicon} />
          <StyledParagraph>{levelSkill}</StyledParagraph>
          <StyledInfoIcon src={personvsicon} />
          <StyledParagraph>
            {slots / 2}vs{slots / 2}
          </StyledParagraph>
        </InformationWrapper>
        <SlotsWrapper>
          {users}/{slots}
        </SlotsWrapper>
        <ButtonWrapper>
          <StyledButton>Dołącz</StyledButton>
        </ButtonWrapper>
      </StyledWrapper>
    );
  }
}

MatchCard.propTypes = {
  place: PropTypes.string.isRequired,
  slots: PropTypes.number.isRequired,
  levelSkill: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  users: PropTypes.string.isRequired,
  teamSecond: PropTypes.string.isRequired,
  teamFirst: PropTypes.string.isRequired,
  ownerUser: PropTypes.string.isRequired,
};

export default MatchCard;
