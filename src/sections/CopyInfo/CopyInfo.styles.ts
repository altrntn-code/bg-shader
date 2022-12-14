import styled from 'styled-components';

import { media } from 'utils/media';
import { underline, s2, s1 } from 'utils/sharedStyled';

export const GithubWrapper = styled.div`
visibility: hidden
  display: initial;
  position: fixed;
  z-index: 20;
  bottom: 0px;
  left: 0px;
  mix-blend-mode: difference;
  color: white;
  transform-origin: bottom left;
  transform: rotate(-90deg) translateY(calc(100% + 16px)) translateX(15px);

  ${media.tablet} {
  visibility: hidden;
    transform: none;
    bottom: 20px;
    left: 30px;
  }
`;

export const AuthorWrapper = styled.h1`
visibility: hidden;
  position: fixed;
  z-index: 20;
  bottom: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  mix-blend-mode: difference;
  color: white;
  ${s1};

  ${media.tablet} {
  visibility: hidden;
    bottom: 20px;
    right: 30px;
  }
`;

export const GithubLink = styled.span`
visibility: hidden;
  display: inline-block;
  position: relative;
  ${s1};
  ${underline};
`;

export const AuthorLink = styled.span`
visibility: hidden;
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
  margin-right: 5px;
`;

export const InspirationWrapper = styled.h1`
visibility: hidden;
  display: none;

  ${media.tabletLand} {
    display: initial;
    position: fixed;
    z-index: 20;
    display: flex;
    align-items: center;
    mix-blend-mode: difference;
    color: white;
    ${s2};
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const InspirationLink = styled.span`
visibility: hidden;
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
  margin-left: 5px;
`;
