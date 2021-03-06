import { GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';

import Cds from '../../../components/Cds/Cds';
import { TopSpacer } from '../../../components/Reusable/TopSpacer';

import { CdType, CdsPageType } from '../../../util/types';
import { getCds } from '../../../util/mockedData';

export const getStaticProps: GetStaticProps = async () => {
  // initializeaza cd-urile
  const cds: Array<CdType> = getCds();

  return {
    props: {
      cds
    }
  };
};

const Index: React.FC<CdsPageType> = (props: CdsPageType) => {
  const { cds } = props;

  return (
    <>
      <Flex width={'100%'} direction='column' pl='15vw' mt='2vw'>
        <Cds cds={cds} />
        <TopSpacer spacing='80px' />
      </Flex>
    </>
  );
};

export default Index;
