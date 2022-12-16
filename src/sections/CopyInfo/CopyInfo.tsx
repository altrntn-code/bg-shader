import React from 'react';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './CopyInfo.styles';

interface Props {
  inspirationName?: string;
  inspirationHref?: string;
  repoHref?: string;
}

export const CopyInfo = (props: Props) => {
  const {
    repoHref = 'https://github.com/none/shader',
    inspirationHref,
    inspirationName,
  } = props;

  return (
    <>
      <S.GithubWrapper>
        <LinkHandler isExternal elHref={repoHref}>
          <S.GithubLink>GitHub repo</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper>
      <S.AuthorWrapper>
        <LinkHandler isExternal elHref="https://bg-shader-nvw20wn0y-altrntn-code.vercel.app/projects/drop-unveil">
          <S.AuthorLink>None</S.AuthorLink>
        </LinkHandler>
        shader &#38; GLSL
      </S.AuthorWrapper>

      {inspirationName && (
        <S.InspirationWrapper>
          Inspired by
          <LinkHandler isExternal elHref={inspirationHref}>
            <S.InspirationLink>{inspirationName}</S.InspirationLink>
          </LinkHandler>
        </S.InspirationWrapper>
      )}
    </>
  );
};
