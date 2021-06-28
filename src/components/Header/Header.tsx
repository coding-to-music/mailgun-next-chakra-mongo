import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';

import { SearchBar } from '../SubComponents/SearchBar';
import { Hamburger } from '../SubComponents/Hamburger';

export const Header: React.FC = () => {
  const [displayHamburger, setDisplayHamburger] = useState('initial');
  const [displaySearchBar, setDisplaySearchBar] = useState('initial');

  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes('cart')) {
      if (router.pathname.includes('checkout')) {
        setDisplayHamburger('none');
      } else {
        setDisplayHamburger('initial');
      }
      setDisplaySearchBar('none');
    } else {
      setDisplayHamburger('initial');
      setDisplaySearchBar('initial');
    }
  }, [router]);

  return (
    <Flex
      w={['90%', '90%', '90%', '80%']}
      pb={4}
      pl={['10vw', '10vw', '10vw']}
      mt='20px'
      alignItems={['center', 'center', 'center', 'center']}
      justifyContent='space-between'
      flexDir='row'
    >
      <Hamburger display={displayHamburger} />
      <SearchBar display={displaySearchBar} />
    </Flex>
  );
};

export default Header;
