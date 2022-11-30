import React, { useState } from 'react';
import * as Styled from './CelebrateOurLove.styled';

const CelebrateOurLove = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Styled.Container id="celebrate">
      <Styled.Wrapper>
        <Styled.Title>Let’s Celebrate Our Love</Styled.Title>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default CelebrateOurLove;
