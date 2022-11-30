import React, { useState } from 'react';
import * as Styled from './WeddingInformation';
import Decoration from '../../images/decoration.svg'
import DecorationLine from '../../images/decoration-line.svg'
import { INFORMATION_LIST } from './utils';

const WeddingInformation = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Styled.Container id="information">
      <Styled.Wrapper>
        <Styled.DecorationWrapper>
          <Styled.Decoration src={Decoration} alt="decoration" />
        </Styled.DecorationWrapper>
        <Styled.Text
          className="wow bounceIn"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          When & Where
        </Styled.Text>
        <Styled.DecorationLineWrapper>
          <Styled.DecorationLine src={DecorationLine} alt="decoration-line" />
        </Styled.DecorationLineWrapper>
        <Styled.InformationWrapper>
          {INFORMATION_LIST.map(({title, time, address, phone, map}) => (
            <Styled.InformationItem key={title}>
            <Styled.ContentWrapper>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Time>{time}</Styled.Time>
              <Styled.Address>{address}</Styled.Address>
              <Styled.Phone>{phone}</Styled.Phone>
              <Styled.MapWrapper>
                <Styled.Map href={map} target="_blank">Xem vị trí</Styled.Map>
              </Styled.MapWrapper>
            </Styled.ContentWrapper>
          </Styled.InformationItem>
          ))}
        </Styled.InformationWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default WeddingInformation;
