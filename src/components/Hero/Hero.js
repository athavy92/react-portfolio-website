import React from 'react';

import { AlignCenter, LinkIconImg, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroImg, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <AlignCenter>
          <HeroImg src="../images/revature.jpg" alt="revature"/>
        </AlignCenter>
        <SectionTitle main center>
          Welcome To My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This portfolio site was built with React and serves to demonstrate my proficiency in this in-demand JavaScript library. 
          Though I'm more proficient in Angular, I have always found React interesting and worth the time to learn.
        </SectionText>
        <SectionDivider />
      </LeftSection>
    </Section>
  </>
);

export default Hero;