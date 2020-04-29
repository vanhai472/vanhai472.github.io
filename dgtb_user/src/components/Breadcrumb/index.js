import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { BreadcrumbContainer, TextBreadcrumb } from "./styles";
class Breadcrumbs extends Component {
  render() {
    const { item } = this.props;
    return (
      <BreadcrumbContainer>
        <Breadcrumb separator=">">
          {item.map((value, key) => (
            <Breadcrumb.Item key={key} href={value.key}>
              <TextBreadcrumb>{value.content}</TextBreadcrumb>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </BreadcrumbContainer>
    );
  }
}

export default Breadcrumbs;
