import React, { Component } from "react";
import ServiceWrapper, {
  Wraperoption,
  CreateService,
  ButtonCreate,
  Container,
} from "./styles";
class Service extends Component {
  render() {
    const optionsService = [
      {
        label: "Tất cả",
        content: "all",
      },
      {
        label: "Tử vi",
        content: "tu-vi",
      },
      {
        label: "Bói toán",
        content: "boi-toan",
      },
      {
        label: "Phong thủy",
        content: "phong-thuy",
      },
    ];
    return (
      <ServiceWrapper>
        <h2>Dịch vụ cung cấp</h2>
        <Container>
          <Wraperoption>
            {optionsService.map((value, i) => (
              <div key={i}>{value.label}</div>
            ))}
          </Wraperoption>
          <CreateService>
            <ButtonCreate>Tạo dịch vụ mới</ButtonCreate>
          </CreateService>
        </Container>
      </ServiceWrapper>
    );
  }
}

export default Service;
