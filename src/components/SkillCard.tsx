import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title = "Skill Title",
  children = "List your skills here. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  className,
}) => {
  return (
    <StyledWrapper className={className}>
      <div className="card">
        <div className="card__content">
          <h3>{title}</h3>
          <div className="content-body">{children}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%; /* Đã sửa: Tốt hơn cho responsive */
    max-width: 500px; /* Đã sửa: Giới hạn chiều rộng */
    min-height: 350px; /* Đã sửa: Tự động co giãn theo nội dung */
    border-radius: 20px;
    padding: 5px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }

  .card__content {
    background: rgb(5, 6, 45);
    border-radius: 17px;
    width: 100%;
    height: 100%;

    /* Thêm padding và style cho nội dung */
    padding: 1.5rem; /* 24px */
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem; /* 16px - Khoảng cách giữa title và content */
  }

  /* Style cho title */
  h3 {
    margin: 0;
    font-size: 1.75rem; /* 28px */
    font-weight: 600;
  }

  /* Style cho nội dung (children) */
  .content-body {
    font-size: 1rem;
    color: #e0e0e0; /* Màu xám nhạt */
    opacity: 0.9;

    /* Tự động style đẹp cho danh sách (list) */
    ul {
      margin-top: 0.5rem;
      padding-left: 1.25rem; /* 20px */
      list-style: disc;
    }
  }
`;

export default SkillCard;
