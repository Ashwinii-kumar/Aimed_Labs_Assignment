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
            <Image src="./src/assets/img.jpg" />
          </div>
          <LoginForm />
        </Container2>
      </Container>
    </>
  );
};

export default App;
