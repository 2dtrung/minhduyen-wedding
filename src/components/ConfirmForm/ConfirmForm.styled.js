import styled from 'styled-components';
import FormLeft from '../../images/form-left.png'
import FormRight from '../../images/form-right.png'

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 58px 16px;

  @media screen and (min-width: 768px) {
    padding: 76px 54px 80px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1164px;
    margin: 0 auto;
    padding: 108px 18px 120px;
    position: relative;
  }
`;

export const BlueBackground = styled.div`
  padding: 10px 6px;
  background: white;
  border: 1px solid #CFCFCF;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 10px 12px;
  }

  @media screen and (min-width: 1200px) {
    padding: 10px 12px;
    width: 700px;
    margin: 0 auto;
  }
`;

export const WhiteBackground = styled.div`
  padding: 50px 16px;
  background: #CDE0EF;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 50px 34px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 20px 24px 120px;
  background-color: white;

  @media screen and (min-width: 768px) {
    padding: 30px 82px 94px;
  }
`;

export const DecorationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Decoration = styled.img`
  @media screen and (min-width: 768px) {
    width: 202px;
    height: 68px;
  }
`;

export const DecorationLine = styled.img`
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
    margin-top: 34px;
    font-size: 40px;
  }
`;

export const DecorationLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 38px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin: 0;
  border: 0;
  padding-left: 0;
  border-bottom: 1px solid #cde0ef;
  border-radius: 0;
  color: #738ea5;

  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #738EA5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 62px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 26px;
  background: #edf3f8;
  color: #002642;
  border: 0;
  box-shadow: 2px 2px 2px #edf3f8;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  cursor: pointer;
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

export const Left = styled.img`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    height: 782px;
    width: 320px;
  }
`;

export const Right = styled.img`
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    position: absolute;
    top: 40px;
    right: 0;
    height: 782px;
    width: 320px;
  }
`;
