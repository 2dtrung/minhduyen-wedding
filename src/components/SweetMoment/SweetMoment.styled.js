import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 24px 16px;

  @media screen and (min-width: 768px) {
    padding: 0 50px 110px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1164px;
    margin: 0 auto;
    padding: 0 18px 160px;
  }
`;

export const DecorationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Decoration = styled.img`
  @media screen and (min-width: 768px) {
    width: 118px;
    height: 42px;
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
    margin-bottom: 92px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 54px;
  }
`;

export const PictureWrapper= styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 8px;
  row-gap: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const PictureWrapperTablet= styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: grid;
    column-gap: 8px;
    row-gap: 10px;
    max-width: 670px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    column-gap: 20px;
    row-gap: 18px;
    max-width: 1164px;
  }
`;

export const ImageWrapper = styled.a`
  width: 100%;
  height: 116px;
`;

export const Image = styled.img`
  width: 100%;
  height: 116px;
`;

export const ImageWrapperTablet1 = styled.a`
  width: 297px;
  height: 224px;
  grid-column: 1/3;
  grid-row: 1/2;

  @media screen and (min-width: 1200px) {
    width: 560px;
    height: 400px;
  }
`;

export const ImageTablet1 = styled.img`
  width: 297px;
  height: 224px;
  grid-column: 1/3;
  grid-row: 1/2;

  @media screen and (min-width: 1200px) {
    width: 560px;
    height: 400px;
  }
`;

export const ImageWrapperTablet2 = styled.a`
  width: 188px;
  height: 224px;
  grid-column: 3/4;
  grid-row: 1/2;

  @media screen and (min-width: 1200px) {
    width: 264px;
    height: 400px;
  }
`;

export const ImageTablet2 = styled.img`
  width: 188px;
  height: 224px;
  grid-column: 3/4;
  grid-row: 1/2;

  @media screen and (min-width: 1200px) {
    width: 264px;
    height: 400px;
  }
`;

export const ImageWrapperTablet3 = styled.a`
  width: 166px;
  height: 224px;
  grid-column: 4/5;
  grid-row: 1/2;

  @media screen and (min-width: 1200px) {
    width: 264px;
    height: 400px;
  }
`;

export const ImageTablet3 = styled.img`
  width: 166px;
  height: 224px;
  grid-column: 4/5;
  grid-row: 1/2;

  @media screen and (min-width: 1200px) {
    width: 264px;
    height: 400px;
  }
`;

export const ImageWrapperTablet4 = styled.a`
  width: 146px;
  height: 224px;
  grid-column: 1/2;
  grid-row: 2/3;

  @media screen and (min-width: 1200px) {
    width: 270px;
    height: 400px;
  }
`;

export const ImageTablet4 = styled.img`
  width: 146px;
  height: 224px;
  grid-column: 1/2;
  grid-row: 2/3;

  @media screen and (min-width: 1200px) {
    width: 270px;
    height: 400px;
  }
`;

export const ImageWrapperTablet5 = styled.a`
  width: 144px;
  height: 224px;
  grid-column: 2/3;
  grid-row: 2/3;

  @media screen and (min-width: 1200px) {
    width: 270px;
    height: 400px;
  }
`;

export const ImageTablet5 = styled.img`
  width: 144px;
  height: 224px;
  grid-column: 2/3;
  grid-row: 2/3;

  @media screen and (min-width: 1200px) {
    width: 270px;
    height: 400px;
  }
`;

export const ImageWrapperTablet6 = styled.a`
  width: 364px;
  height: 456px;
  grid-column: 3/5;
  grid-row: 2/4;

  @media screen and (min-width: 1200px) {
    width: 548px;
    height: 800px;
  }
`;

export const ImageTablet6 = styled.img`
  width: 364px;
  height: 456px;
  grid-column: 3/5;
  grid-row: 2/4;

  @media screen and (min-width: 1200px) {
    width: 548px;
    height: 800px;
  }
`;

export const ImageWrapperTablet7 = styled.a`
  width: 297px;
  height: 224px;
  grid-column: 1/3;
  grid-row: 3/4;

  @media screen and (min-width: 1200px) {
    width: 560px;
    height: 382px;
  }
`;

export const ImageTablet7 = styled.img`
  width: 297px;
  height: 224px;
  grid-column: 1/3;
  grid-row: 3/4;

  @media screen and (min-width: 1200px) {
    width: 560px;
    height: 382px;
  }
`;

export const ImageWrapperTablet8 = styled.a`
  width: 297px;
  height: 188px;
  grid-column: 1/3;
  grid-row: 4/5;

  @media screen and (min-width: 1200px) {
    width: 560px;
    height: 382px;
  }
`;

export const ImageTablet8 = styled.img`
  width: 297px;
  height: 188px;
  grid-column: 1/3;
  grid-row: 4/5;

  @media screen and (min-width: 1200px) {
    width: 560px;
    height: 382px;
  }
`;

export const ImageWrapperTablet9 = styled.a`
  width: 364px;
  height: 188px;
  grid-column: 3/5;
  grid-row: 4/5;

  @media screen and (min-width: 1200px) {
    width: 548px;
    height: 382px;
  }
`;


export const ImageTablet9 = styled.img`
  width: 364px;
  height: 188px;
  grid-column: 3/5;
  grid-row: 4/5;

  @media screen and (min-width: 1200px) {
    width: 548px;
    height: 382px;
  }
`;
