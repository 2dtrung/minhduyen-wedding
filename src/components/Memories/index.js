import React, { useState } from 'react';
import * as Styled from './Memories.styled';
import Decoration from '../../images/decoration.svg'
import DecorationLine from '../../images/decoration-line.svg'
import { ITEM_LIST } from './utils';

const Memories = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Styled.Container id="memory">
      <Styled.Wrapper>
      <Styled.DecorationWrapper>
          <Styled.Decoration src={Decoration} alt="decoration" />
        </Styled.DecorationWrapper>
        <Styled.Text>Our Sweet Story</Styled.Text>
        <Styled.DecorationLineWrapper>
          <Styled.DecorationLine src={DecorationLine} alt="decoration-line" />
        </Styled.DecorationLineWrapper>
        <Styled.ContentWrapper>
          {ITEM_LIST.map(({image, title, description}, index) => (
            <Styled.Item key={title} $reverse={index%2 !== 0}>
            <Styled.ImageWrapper
              className={`wow ${index%2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`}
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <Styled.Image src={image} alt="title" />
            </Styled.ImageWrapper>
            <Styled.Content
              className={`wow ${index%2 !== 0 ? 'fadeInLeft' : 'fadeInRight'}`}
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <Styled.Title>{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
            </Styled.Content>
          </Styled.Item>
          ))}
        </Styled.ContentWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Memories;
