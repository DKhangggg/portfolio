import React from "react";
import styled from "styled-components";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
const StyledButton = styled.button`
  padding: 1rem 2rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Khoảng cách giữa icon và text */

  cursor: pointer;
  color: #fff;
  font-size: 17px;
  font-weight: 500; /* Thêm độ đậm cho dễ đọc */
  border-radius: 1rem;
  border: none;
  position: relative;
  background: #100720;
  transition: 0.1s;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(107, 33, 103, 1) 17.8%,
      #00adb5 100.2%
    );
    filter: blur(15px);
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
  }

  &:active {
    transform: scale(0.9) rotate(3deg);
    background: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(88, 27, 85, 1) 17.8%,
      rgba(2, 245, 255, 1) 100.2%
    );
    transition: 0.5s;
  }
`;

export default Button;
