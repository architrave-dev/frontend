import React from "react";
import styled from "styled-components";
import sample from "../../assets/sampleImage.png";

export default function ImageArea() {
  return (
    <section>
      <TempImage src={sample} width="1520" height="1140" alt="sample image" />
      <TextDescription>
        [Beyond the Stone.] 한지에 수묵채색, 162.2x130.3cm, 2019
      </TextDescription>
    </section>
  );
}

const TempImage = styled.img`
  margin-block-end: 1.5rem;
`;

const TextDescription = styled.p`
  text-align: center;
`;
