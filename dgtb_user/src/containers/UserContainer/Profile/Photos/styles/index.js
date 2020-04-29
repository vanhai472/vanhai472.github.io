import styled from "styled-components";

const PhotoUploadWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px dashed #edecf0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    color: #0e0841;
    margin-top: 15px;
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
`;

export default PhotoUploadWrapper;
