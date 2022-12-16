import { GetStaticProps } from 'next';

import { sharedValues } from 'utils/sharedValues';
import { PageProps } from 'utils/sharedTypes';

export const getStaticProps: GetStaticProps = () => {
  const head: PageProps['head'] = {
    ogImage: 'https://none.jpg',
    title: 'Shader BG',
    description: 'Shader',
  };

  return {
    props: {
      head,
      inspirationName: 'Monopo London',
      inspirationHref: 'https://monopo.london/',
      repoHref: 'https://github.com/none/shader/tree/main/src/containers/projects/shader',
    },
    revalidate: sharedValues.ISR_TIMEOUT,
  };
};
