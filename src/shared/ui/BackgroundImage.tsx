import styled from "styled-components";
import summer from "../../assets/summer.jpg";

function BackgroundImage() {
  return <StyledBackgroundImage src={summer} alt="sampleImage" />;
}

export { BackgroundImage };

const StyledBackgroundImage = styled.img`
  z-index: -10;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
