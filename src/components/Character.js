// Write your Character component here
// import React from 'react'

export default function Characters(props) {
  //   const { actor } = props;
  const { actor } = props;
  return (
    <div>
      <h2>{actor.name}</h2>
      <h3>{actor.height}</h3>
    </div>
  );
}
