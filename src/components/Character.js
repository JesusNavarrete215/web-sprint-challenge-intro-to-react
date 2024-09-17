// Write your Character component here
import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const CharaStyle = styled.h2`
  border: 2px solid;
  padding: 1rem;
  border-radius: 3px;
  width: 50%;
  margin-bottom: 20px;
  margin-left: 25%;
  background: grey;
`;

export default function Characters(props) {
  //   const { actor } = props;
  const { actor } = props;
  return (
    <div>
      <CharaStyle>
        {actor.name}
        {actor.height}
      </CharaStyle>
    </div>
  );
}
