import styled from "styled-components";

const NewCommentWrapper = styled.div`
  padding-top: 32px;
  @media only screen and (min-width: 768px) {
    padding-top: 80px;
  }
  .ant-spin {
    color: #009ca9;
  }
  .ant-spin-dot-item {
    background: linear-gradient(352.87deg, #009ca9 10.34%, #2ccfdd 88.46%);
  }
`;

export const NewCommentContainer = styled.div`
  .item {
    margin-top: 0 !important;
    margin-bottom: 24px;
    /* margin-right: 18px !important; */
    height: 280px;
  }
`;

export default NewCommentWrapper;
