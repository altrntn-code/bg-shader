import React from 'react';
import Link from 'next/link';

import { Head } from 'seo/Head/Head';

import * as S from './IndexPage.styles';

export default function IndexPage() {
  return (
    <>
      <Head />
      <S.Wrapper>
        <S.ProjectsWrapper>
          <S.ProjectContainer>
            <Link href="/projects/drop-unveil" passHref>
              <S.ProjectLink>BG-Shader_GLSL</S.ProjectLink>
            </Link>
          </S.ProjectContainer>
        </S.ProjectsWrapper>
      </S.Wrapper>
    </>
  );
}
