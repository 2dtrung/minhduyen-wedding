import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import BackgroundTimer from '../../images/bg-timer.png'

export const Container = styled.div`
  background-color: white;
`;

export const Wrapper = styled.div`
  padding: 0 16px 20px;

  @media screen and (min-width: 768px) {
    padding: 0 20px 40px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 20px 40px;
    max-width: 1164px;
    margin: 0 auto;
  }
`;

export const DecorationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Decoration = styled.img`
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 62px;
  }
`;

export const DecorationLine = styled.img`

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1200px) {
    width: 346px;
  }
`;

export const Text = styled.div`
  margin-top: 5px;
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 12px;
    font-size: 46px;
  }
`;

export const DecorationLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 54px;
  }
`;


export const ContentWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 54px;
  }
`;

export const Item = styled.div`
  height: 500px;
  max-width: 400px;
  margin: 0 auto;
  position: relative;

  &:first-child {
    h2 {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
    height: 500px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({$reverse}) => $reverse && 'flex-direction: row-reverse'}
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  z-index: 2;
  @media screen and (min-width: 768px) {
    
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    top: 0px;
    width: 40%;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 360px;
    height: 340px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 460px;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 260px;
  z-index: 1;
  background: rgba(134,160,182,.05);
  padding: 34px 24px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    top: 290px;
    padding: 54px 24px;
  }

  @media screen and (min-width: 1200px) {
    top: 0px;
    width: 60%;
    position: relative;
    height: 260px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;
  color: #002642;
  text-align: center;
  margin: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
    font-weight: bold;
  }
`;

export const Description = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #848892;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
