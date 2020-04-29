import styled from "styled-components";

const BreadcrumbContainer = styled.div`
  .ant-breadcrumb > span:last-child > a > span {
    color: #0e0841;
  }
`;

const TextBreadcrumb = styled.span`
  color: #009ca9;
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
`;

export { BreadcrumbContainer, TextBreadcrumb };
