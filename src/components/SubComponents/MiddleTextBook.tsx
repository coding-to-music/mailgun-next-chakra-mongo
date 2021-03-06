import { Text, Heading } from '@chakra-ui/react';
import { theme } from '../../styles/theme';

type MiddleTextBookProps = {
  title: string;
  author?: string;
  showAuthor?: boolean;
  description?: string;
  showDescription?: boolean;
};

export const MiddleTextBook: React.FC<MiddleTextBookProps> = (props: MiddleTextBookProps) => {
  const { title, description, author, showAuthor = false, showDescription = false } = props;

  return (
    <>
      <Heading as='h2' fontSize={['14px', '18px', '21px']} color={theme.colors.primaryBlack[900]}>
        {title}
      </Heading>
      {showAuthor && (
        <Text
          mt={['10px']}
          fontSize={['12px', '14px', '18px']}
          color={theme.colors.primaryBlack[800]}
        >
          {author}
        </Text>
      )}
      {showDescription && (
        <Text
          mt={['10px']}
          fontSize={['12px', '14px', '16px']}
          color={theme.colors.primaryBlack[800]}
        >
          {description}
        </Text>
      )}
    </>
  );
};

export default MiddleTextBook;
