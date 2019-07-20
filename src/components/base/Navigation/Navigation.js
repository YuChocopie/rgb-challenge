import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AccountCircle, DirectionsBus, InsertInvitation } from '@material-ui/icons';
import { findIndex } from 'lodash/fp';

const pathnames = [
  '/location',
  '/',
  '/profile',
];

const S = {
  BottomNavigation: styled(BottomNavigation)`
    border-top: 1px solid ${({ theme }) => theme.palette.grey[300]};
  `,
};

const Navigation = ({ location }) => {
  const [value, setValue] = useState(() => findIndex(
    pathname => pathname === location.pathname,
    pathnames,
  ));

  const handleChange = useCallback((event, newValue) => setValue(newValue), []);

  return (
    <S.BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        to="/location"
        label="막차 알람"
        icon={<DirectionsBus />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="지금 집으로"
        icon={<InsertInvitation />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="프로필 설정"
        icon={<AccountCircle />}
      />
    </S.BottomNavigation>
  );
};

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Navigation);
