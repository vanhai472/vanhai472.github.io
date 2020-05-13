import React, { Component } from "react";
import IntroductionWrapper, { IntroductionContent } from "./styles";

class Introduction extends Component {
  render() {
    return (
      <IntroductionWrapper>
        <h2>Giới thiệu</h2>
        <IntroductionContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            erat massa, blandit ac neque sed, lacinia mollis eros. Aliquam erat
            volutpat. Morbi turpis mauris, finibus sed ante ac, ornare placerat
            felis. Duis tristique convallis nisi eget venenatis. Suspendisse
            volutpat, tellus in volutpat interdum, risus quam mollis leo, ut
            bibendum urna libero id nibh. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur feugiat mi sed porttitor
            rutrum. Etiam accumsan eu lectus nec hendrerit. Nam at mollis
            tellus, iaculis feugiat lectus. Sed dictum id mi id rutrum.
            Suspendisse tempus eros ut leo ullamcorper, ac vehicula magna
            scelerisque. Curabitur convallis fermentum egestas. Sed vitae velit
            tristique, faucibus quam quis, suscipit odio. Nulla facilisi. In
            urna quam, congue dictum rutrum sed, fermentum a sapien. Sed ut
            ullamcorper lectus.
          </p>
        </IntroductionContent>
      </IntroductionWrapper>
    );
  }
}

export default Introduction;
