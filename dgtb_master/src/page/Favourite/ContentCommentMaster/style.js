import styled from "styled-components";

const WraperContent = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 16px;
  .select-option {
    padding: 7px;
    text-align: center;
    color: #6e6c7e;
    border: 2px solid #edecf0;
    box-sizing: border-box;
    border-radius: 12px;
    display: inline-block;
    cursor: pointer;
  }
  .select-option:first-child {
    margin-right: 12px;
  }
  .optionActive {
    color: #009ca9;
    border: 2px solid #009ca9;
  }
  .wraperContentUser {
    margin-top: 16px;
  }
`;
export const ChatOnline = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;
export const ContentComment = styled.div`
  border: 2px solid #edecf0;
  border-radius: 8px;
  padding: 12px;
`;
export const ContentCommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .avataMaster {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
  }
  .nameMaster {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  .img-buffed {
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 2;
  }
  .buffed {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #d84851;
    position: relative;
    z-index: 2;
  }
  .wraperBuffed {
    display: flex;
    height: 24px;
    border-radius: 8px;
    background: rgba(216, 72, 81, 0.2);
    .img-buffed {
      width: 14px;
      height: 14px;
      margin-right: 6px;
      margin-bottom: 3px;
    }
  }
`;
export const ContentCommentMaster = styled.div`
  .textContentComment {
    font-size: 14px;
    line-height: 16px;

    /* Neutral/Dark */

    color: #0e0841;
  }
`;
export default WraperContent;
