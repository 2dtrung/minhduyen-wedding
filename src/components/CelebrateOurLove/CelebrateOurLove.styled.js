import styled from 'styled-components';
import Background from '../../images/bg-celebrate-our-love-mobile.png'
import BackgroundTablet from '../../images/bg-celebrate-our-love-tablet.png'
import BackgroundDesktop from '../../images/bg-celebrate-our-love-desktop.png'

export const Container = styled.div`
  background: url(${Background}) center center/cover no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundTablet});
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${BackgroundDesktop});
  }
`;

export const Wrapper = styled.div`
  height: 106px;
  padding: 38px 74px;

  @media screen and (min-width: 768px) {
    height: 184px;
    padding: 66px 32px;
  }

  @media screen and (min-width: 1200px) {
    height: 324px;
    padding: 140px 18px 110px;
    max-width: 1164px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    height: 52px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 54px;
    height: 74px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px #000000;
`;

export const Timer = styled.div`
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
