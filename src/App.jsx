import React from "react";
import { Container, Container2 } from "./components/styles/Container.stylesd";
import { Image } from "./components/styles/Image.styled";
import LoginForm from "./components/LoginForm";
import { GlobalStyles } from "./components/styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Container2>
          <div className="images">
            <Image src="https://res.cloudinary.com/duclatpvk/image/upload/v1698523242/temp/Group_3608_dx7ewz.jpg" alt="none"/>
          </div>
          <LoginForm />
        </Container2>
      </Container>
    </>
  );
};

export default App;
