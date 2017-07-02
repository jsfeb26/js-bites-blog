import React from 'react';
import { config } from 'config';
import { rhythm } from 'utils/typography';
import styled from 'styled-components';

import profilePic from '../images/profile-picture.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import github from '../images/github.png';

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const SocialLinks = styled.a`
  display: block;
  box-shadow: none;
  width: 32px;
  height: 32px;
`;

const SocialImages = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 0;
  &:hover {
    opacity: 0.5;
  }
`;

const BioParagraph = styled.p`
  text-align: center;
  margin-bottom: 36px;
`;

const ProfilePic = styled.img`
  width: 100px;
  margin-bottom: 9px;
`;

export default () => (
  <BioContainer>
    <ProfilePic src={profilePic} alt={`author ${config.authorName}`} />
    <BioParagraph>
      Written by <strong>{config.authorName}</strong> who lives and works in New York building useful things. <a href="https://twitter.com/jsfeb26">You should follow him on Twitter</a>
    </BioParagraph>
    <SocialContainer>
      <SocialLinks href="https://www.linkedin.com/in/jsfeb26/">
        <SocialImages alt="Linkedin" src={linkedin} />
      </SocialLinks>
      <SocialLinks href="https://twitter.com/jsfeb26">
        <SocialImages alt="Twitter" src={twitter} />
      </SocialLinks>
      <SocialLinks href="github.com/jsfeb26">
        <SocialImages alt="Github" src={github} />
      </SocialLinks>
    </SocialContainer>
  </BioContainer>
);
