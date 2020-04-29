import styled from "styled-components";

const ItemComment = styled.div`
  background: #fff;
  box-sizing: border-box;
  box-shadow: 4px 16px 32px rgba(0, 0, 0, 0.08);
  border-radius: 16px;

  .list-comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 12px 0 16px;
  }

  .schedule-rate {
    display: flex;
    align-items: center;
    height: 24px;
    background: rgba(216, 72, 81, 0.2);
    border-radius: 8px;
    padding: 4px 8px;
    & > img {
      margin-right: 4px;
    }
  }

  .content-schedule,
  .user-name-rate {
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #d84851;
  }

  .user-rate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    margin-top: 8px;

    .ant-rate {
      line-height: 1px;
    }
  }

  .user-name-rate {
    color: #000000;
    font-weight: 500;
    font-size: 16px;
  }

  .content-rate {
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #0e0841;
    padding: 0 20px 0 12px;
    margin-top: 10px;
    height: 64px;
    text-align: justify;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .rate-master {
    display: flex;
    align-items: center;
    padding-left: 12px;
    margin-top: 12px;
    margin-bottom: 13px;
  }

  .master-content {
    display: flex;
    align-items: center;
    background: #e4e6eb;
    border-radius: 20px;
    & > span {
      font-family: "Roboto-Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      margin-right: 16px;
    }
  }

  .card-feedback {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    margin: 0 12px;
    border-top: 1px solid #edecf0;
  }

  .schedule-time {
    font-family: "Roboto-Regular";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #a7a7a7;
    line-height: 16px;
    height: 24px;
    display: flex;
    align-items: flex-end;
    margin-right: 14px;
  }

  .feedback-rate {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export default ItemComment;
