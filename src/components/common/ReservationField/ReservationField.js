import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import DatePicker from '../DatePicker';
import { eventIcon } from '../../../assets';

const S = {
  Wrapper: styled.div`
    padding-top: 25px;
    padding-bottom: 16px;
    border-bottom: 1px solid #d7d9ec;
    width: 100%;
    padding-left: 24px;
    display: flex;
    align-items: start;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 9px;
  `,
  Label: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 14px;
    color: #2f3e9e;
    margin-bottom: 8px;
  `,
  Field: styled.div`
    font-family: NotoSansCJKkr;
    font-size: 16px;
    letter-spacing: 0.7px;
  `,
  Button: styled(Button)``,
};

const ReservationField = ({ field, className }) => (
  <S.Wrapper className={className}>
    <S.Icon src={eventIcon} alt="event-icon" />
    <div className="changeDate">
      <S.Label>예약 날짜</S.Label>
      {/* <S.Field>2019년 05월 03일</S.Field> */}
      <DatePicker {...field} />
    </div>
    <S.Button
      type="button"
      color="primary"
      variant="outlined"
    >
        변경
    </S.Button>
  </S.Wrapper>
);

ReservationField.propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }),
};

ReservationField.defaultProps = {
  className: undefined,
  field: {},
};

export default ReservationField;
