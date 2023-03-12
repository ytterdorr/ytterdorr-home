
import styled from "styled-components"
import ProfilePicture from "./assets/profilbild_240px.png"

import Home from "./Views/Home";

const Background = styled.div`
  background: linear-gradient(53deg, rgba(16,184,218,1) 0%, rgba(9,9,121,1) 100%);
  height: 100vh;
  position: static;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 20%;
  max-height: 200px;
  min-height: 100px;
  background-color: skyblue;
  display: flex;
  align-items: center;
`;

const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 5;
`;

const RightSideCounter = styled.div`
  min-width: 100px;
  max-width: 150px;
  height: 100px;
  flex: 1;
  /* background-color: green; */
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  max-width: 150px;
  height: 100px;
  flex: 1;
  /* background-color: green; */
  
  /* flex: 1; */
`

const ProfileCircle = styled.div`
  background-image: url(${ProfilePicture});
  background-size: cover;
  height: 100px;
  width: 100px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  /* background-color: red; */
  /* margin: 2rem; */
`



function App() {
  return (
    <div className="App">
      <Background>
        <HeaderContainer>

          <ProfileContainer>
            <ProfileCircle></ProfileCircle>
          </ProfileContainer>

          <HeaderTitleContainer>
            <h1>Hej</h1>
          </HeaderTitleContainer>
          <RightSideCounter></RightSideCounter>
        </HeaderContainer>
        <Home></Home>


      </Background >
    </div>
  );
}

export default App;
