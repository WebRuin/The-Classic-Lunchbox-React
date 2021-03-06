import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputSubmit = styled.button`
  text-transform: uppercase;
  color: #fff;
  background: #793817;
  border: 1px solid #793817;
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Quicksand', 'Raleway', sans-serif;
  transition: all 0.2s;
  position: relative;
  z-index: 2;

  &[disabled] {
    color: #d12028;
    background: #fff;
    border-color: #d12028;
    transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
  }
  &[disabled]:hover {
    color: #d12028;
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    outline: 0;
    color: #793817;
    background: #fff;
    border: 1px solid #793817;
  }
  &:hover:after,
  &:focus:after {
    height: 100%;
  }
  &.warning:after {
    background: #d12028;
  }
  &.success:after,
  input[type='submit'].success:after {
    background: #2dc22d;
  }
  &.github,
  &.facebook,
  &.twitter {
    border: 0;
    display: block;
    margin-bottom: 2rem;
    width: 100%;
    color: #fff;
    padding: 2rem;
  }
  &.github {
    background: #82d465;
  }
  &.github:after {
    background: #5cc437;
  }
  &.facebook {
    background: #3864a3;
  }
  &.facebook:break-after {
    background: #2d5082;
  }
  &.twitter {
    background: #5ea9dd;
  }
  &.twitter:after {
    background: #2c8dd0;
  }
`;

const StyledInputSubmit = props => <StyledInputSubmit>{props.children}</StyledInputSubmit>;

StyledInputSubmit.propType = {
  buttonClass: PropTypes.string,
  children: PropTypes.element.isRequired,
  isDisabled: PropTypes.bool
};

StyledInputSubmit.defaultProp = {
  isDisabled = true,
  buttonClass = ''
}

export default StyledInputSubmit;
