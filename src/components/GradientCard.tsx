import React from "react";
import styled from "styled-components";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const GradientCard: React.FC<CardProps> = ({ children, className }) => {
  return (
    <StyledWrapper className={className}>
      <div className="bgblue">
        <div className="card">{children}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Bản thân StyledWrapper sẽ nhận 'className' (ví dụ: w-96, min-w-[300px])
    để quyết định kích thước CỦA NÓ.
    Chúng ta không cần set width/height ở đây.
  */

  .bgblue {
    background: linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98);
    padding: 1px; /* Đây là trick tạo border */
    border-radius: 1.2rem;
    box-shadow: 0px 1rem 1.5rem -0.9rem #000000e1;

    /* (1) GỠ BỎ max-width: 300px;
      Nó đang xung đột với code Project.tsx (lg:min-w-[400px]) 
    */
    /* max-width: 300px; */

    /* (2) Thêm width: 100% và height: 100% để nó luôn lấp đầy
      StyledWrapper (cái mà đang nhận className) 
    */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .card {
    font-size: 1rem;
    color: #bec4cf;
    background: linear-gradient(135deg, #0d1120 0%, #222831 43%, #0d1120 100%);
    padding: 1.5rem;
    border-radius: 1.2rem; /* Phải nhỏ hơn hoặc bằng border-radius của .bgblue */

    /* (3) GỠ BỎ width/height CỐ ĐỊNH */
    /* width: 500px; */
    /* height: 500px; */

    /* (4) Thêm width: 100% và height: 100% 
      để nó lấp đầy .bgblue
    */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

export default GradientCard;
