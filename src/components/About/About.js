import styled from 'styled-components';
import Background from '../../images/bg-celebrate-our-love-mobile.png'
import BackgroundTablet from '../../images/bg-celebrate-our-love-tablet.png'
import BackgroundDesktop from '../../images/bg-celebrate-our-love-desktop.png'

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Left = styled.img`
  width: 170px;
  height: 204px;
  position: absolute;
  top: 0px;
  left: 0px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 240px;
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 480px;
  }
`;

export const Right = styled.img`
  width: 170px;
  height: 204px;
  position: absolute;
  top: 0px;
  right: 0px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 240px;
  }

  @media screen and (min-width: 1200px) {
    width: 400px;
    height: 480px;
  }
`;

export const Wrapper = styled.div`
  padding: 50px 16px;

  @media screen and (min-width: 768px) {
    padding: 100px 40px 70px;
  }

  @media screen and (min-width: 1200px) {
    padding: 140px 18px 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1164px;
    margin: 0 auto;
  }
`;

export const HeWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    width: 306px;
  }
`;

export const SheWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 0px;
    width: 306px;
  }
`;

export const HeAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

export const SheAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
`;


export const Avatar = styled.img`
  width: 108px;
  height: 108px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 208px;
    height: 208px;
  }

  @media screen and (min-width: 1200px) {
    width: 108px;
    height: 108px;
    margin: 0;
  }
`;

export const SheAvatar = styled.img`
  width: 108px;
  height: 108px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 208px;
  height: 208px;
  }

  @media screen and (min-width: 1200px) {
    width: 108px;
    height: 108px;
    margin: 0;
  }
`;

export const HeName = styled.h2`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 20px;
  text-align: center;
  margin: 36px 0 0;
  color: #002642;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    text-align: end;
  }
`;

export const SheName = styled.h2`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 20px;
  text-align: center;
  margin: 30px 0 0;
  color: #002642;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin: 36px 0 0;
    text-align: start;
  }
`;

export const HeDescription = styled.p`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin: 10px 0 0;
  color: #848892;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    text-align: end;
  }
`;

export const SheDescription = styled.p`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin: 10px 0 0;
  color: #848892;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;

export const SocialWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    justify-content: ${({$reverse}) => $reverse ? 'start' : 'end'};
  }
`;

export const IconWrapper = styled.a`
  width: 30px;
  height: 26px;
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
    margin-right: 20px;
  }
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 26px;
  &:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
    margin-right: 20px;
  }
  }
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 60px 0 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 576px;
    margin: 0;
  }
`;

export const Middle = styled.img`
  width: 320px;
  height: 404px;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 604px;
  }

  @media screen and (min-width: 1200px) {
    width: 576px;
    height: 756px;
  }
`;





