import styled, { css } from 'styled-components';

import { media } from 'utils/media';

import { sharedValues } from 'utils/sharedValues';
import { GithubSvg } from './svg/GithubSvg';
import { WebSvg } from './svg/WebSvg';
import { TwitterSvg } from './svg/TwitterSvg';
import { LnSvg } from './svg/LnSvg';
import {
  iconMargin,
  iconSize,
  photoSize,
  borderRadius,
  expandDuration,
  fixedBottom,
  fixedRight,
  fixedBottomTablet,
  fixedRightTablet,
} from './AuthorInfo.constants';

interface WrapperProps {
  elWidth: number;
  isLoaded: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
visibility: hidden;
  position: fixed;
  z-index: 20;
  display: flex;
  right: ${fixedRight}px;
  bottom: ${fixedBottom}px;
  mix-blend-mode: difference;
  border-radius: ${borderRadius}px;
  display: flex;
  align-items: center;
  height: ${photoSize}px;
  width: ${props => props.elWidth}px;
  transition: width ${expandDuration}s ${sharedValues.timings.t1}, opacity 0.4s;
  overflow: hidden;
  border: 2px solid transparent;

  ${media.tablet} {
    bottom: ${fixedBottomTablet}px;
    right: ${fixedRightTablet}px;
  }

  opacity: 0;

  ${props =>
    props.isLoaded &&
    css`
      opacity: 1;
    `}
`;

export const IconsWrapper = styled.div`
visibility: hidden;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border-radius: ${borderRadius}px;
  padding-right: ${iconMargin}px;
`;

interface ImageWrapperProps {
  offsetX: number;
  isExpanded?: boolean;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
visibility: hidden;
  position: fixed;
  z-index: 20;
  display: flex;
  right: ${fixedRight}px;
  bottom: ${fixedBottom}px;
  width: ${props => `calc(${photoSize}px + ${props.offsetX}px)`};
  transition: width ${expandDuration}s ${sharedValues.timings.t1};
  user-select: none;
  pointer-events: none;
  display: none;

  ${media.tablet} {
    bottom: ${fixedBottomTablet}px;
    right: ${fixedRightTablet}px;
  }
`;

export const ImageContainer = styled.button`
visibility: hidden;
  cursor: pointer;
  user-select: initial;
  pointer-events: initial;
  width: ${photoSize}px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  transform: scale(0.8);

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const AuthorImage = styled.img`
visibility: hidden;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  transition: transform ${expandDuration}s ${sharedValues.timings.t1};
`;

export const IconWrapper = styled.div`
visibility: hidden;
  margin-right: ${iconMargin}px;
`;

export const GithubSvgComp = styled(GithubSvg)`
visibility: hidden;
  width: ${iconSize}px;
`;
export const LnSvgComp = styled(LnSvg)`
visibility: hidden;
  width: ${iconSize}px;
`;
export const TwitterSvgComp = styled(TwitterSvg)`
visibility: hidden;
  width: ${iconSize}px;
`;
export const WebSvgComp = styled(WebSvg)`
visibility: hidden;
  width: ${iconSize}px;
`;
