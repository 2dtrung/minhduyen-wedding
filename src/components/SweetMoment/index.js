import React, { useState } from 'react';
import * as Styled from './SweetMoment.styled';
import Decoration from '../../images/decoration.svg'
import DecorationLine from '../../images/decoration-line.svg'
import Sweet1 from '../../images/sweet_1.png'
import Sweet2 from '../../images/sweet_2.png'
import Sweet3 from '../../images/sweet_3.png'
import Sweet4 from '../../images/sweet_4.png'
import Sweet5 from '../../images/sweet_5.png'
import Sweet6 from '../../images/sweet_6.png'
import Sweet7 from '../../images/sweet_7.png'
import Sweet8 from '../../images/sweet_8.png'
import Sweet9 from '../../images/sweet_9.png'
import Sweet1Tablet from '../../images/sweet_1_tablet.png'
import Sweet2Tablet from '../../images/sweet_2_tablet.png'
import Sweet3Tablet from '../../images/sweet_3_tablet.png'
import Sweet4Tablet from '../../images/sweet_4_tablet.png'
import Sweet5Tablet from '../../images/sweet_5_tablet.png'
import Sweet6Tablet from '../../images/sweet_6_tablet.png'
import Sweet7Tablet from '../../images/sweet_7_tablet.png'
import Sweet8Tablet from '../../images/sweet_8_tablet.png'
import Sweet9Tablet from '../../images/sweet_9_tablet.png'
import SweetView1 from '../../images/sweet_view_1.jpg'
import SweetView2 from '../../images/sweet_view_2.jpg'
import SweetView3 from '../../images/sweet_view_3.jpg'
import SweetView4 from '../../images/sweet_view_4.jpg'
import SweetView5 from '../../images/sweet_view_5.jpg'
import SweetView6 from '../../images/sweet_view_6.jpg'
import SweetView7 from '../../images/sweet_view_7.jpg'
import SweetView8 from '../../images/sweet_view_8.jpg'
import SweetView9 from '../../images/sweet_view_9.jpg'
import Fancybox from "./fancybox.js";

const SweetMoment = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Styled.Container id="moments">
      <Styled.Wrapper>
        <Styled.DecorationWrapper>
          <Styled.Decoration src={Decoration} alt="decoration" />
        </Styled.DecorationWrapper>
        <Styled.Text 
          className="wow bounceIn"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          Sweet Captured Moments
        </Styled.Text>
        <Styled.DecorationLineWrapper>
          <Styled.DecorationLine src={DecorationLine} alt="decoration-line" />
        </Styled.DecorationLineWrapper>
        <Styled.PictureWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView1}>
            <Styled.Image src={Sweet1} alt="sweet1"/>
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView2}>
            <Styled.Image src={Sweet2} alt="sweet2" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView3}>
            <Styled.Image src={Sweet3} alt="sweet3" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView4}>
            <Styled.Image src={Sweet4} alt="sweet4" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView5}>
            <Styled.Image src={Sweet5} alt="sweet5" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView6}>
            <Styled.Image src={Sweet6} alt="sweet6" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView7}>
            <Styled.Image src={Sweet7} alt="sweet7" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView8}>
            <Styled.Image src={Sweet8} alt="sweet8" />
          </Styled.ImageWrapper>
          <Styled.ImageWrapper data-fancybox="gallery" href={SweetView9}>
            <Styled.Image src={Sweet9} alt="sweet9" />
          </Styled.ImageWrapper>
        </Styled.PictureWrapper>
        <Styled.PictureWrapperTablet>
          <Fancybox>
            <Styled.ImageWrapperTablet1 data-fancybox="gallery" href={SweetView1}>
              <Styled.ImageTablet1 src={Sweet1Tablet} alt="sweet1"/>
            </Styled.ImageWrapperTablet1>
            <Styled.ImageWrapperTablet2 data-fancybox="gallery" href={SweetView2}>
              <Styled.ImageTablet2 src={Sweet2Tablet} alt="sweet2" />
            </Styled.ImageWrapperTablet2>
            <Styled.ImageWrapperTablet3 data-fancybox="gallery" href={SweetView3}>
              <Styled.ImageTablet3 src={Sweet3Tablet} alt="sweet3" />
            </Styled.ImageWrapperTablet3>
            <Styled.ImageWrapperTablet4 data-fancybox="gallery" href={SweetView4}>
              <Styled.ImageTablet4 src={Sweet4Tablet} alt="sweet4" />
            </Styled.ImageWrapperTablet4>
            <Styled.ImageWrapperTablet5 data-fancybox="gallery" href={SweetView5}>
              <Styled.ImageTablet5 src={Sweet5Tablet} alt="sweet5" />
            </Styled.ImageWrapperTablet5>
            <Styled.ImageWrapperTablet6 data-fancybox="gallery" href={SweetView6}>
              <Styled.ImageTablet6 src={Sweet6Tablet} alt="sweet6" />
            </Styled.ImageWrapperTablet6>
            <Styled.ImageWrapperTablet7 data-fancybox="gallery" href={SweetView7}>
              <Styled.ImageTablet7 src={Sweet7Tablet} alt="sweet7" />
            </Styled.ImageWrapperTablet7>
            <Styled.ImageWrapperTablet8 data-fancybox="gallery" href={SweetView8}>
              <Styled.ImageTablet8 src={Sweet8Tablet} alt="sweet8" />
            </Styled.ImageWrapperTablet8>
            <Styled.ImageWrapperTablet9 data-fancybox="gallery" href={SweetView9}>
              <Styled.ImageTablet9 src={Sweet9Tablet} alt="sweet9" />
            </Styled.ImageWrapperTablet9>
          </Fancybox>
        </Styled.PictureWrapperTablet>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default SweetMoment;
