import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This portfolio site was built with React and serves to demonstrate my proficiency in this in-demand Front End library.
        </SectionText>
        <SectionDivider />
      </LeftSection>
    </Section>
  </>
);

export default Hero;