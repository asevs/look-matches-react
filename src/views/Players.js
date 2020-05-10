import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from 'templates/UserPageTemplate';

const Players = () => (
  <UserPageTemplate>
    <></>
  </UserPageTemplate>
);

const mapStateToProps = ({ players }) => ({ players });
export default connect(mapStateToProps)(Players);
