
import { Box, Text } from '@radix-ui/themes'

const CryptoDataViewer = ({ openPrice, closePrice }) => {
  const priceIncreased = parseFloat(closePrice) > parseFloat(openPrice);
  const color = priceIncreased ? 'green' : 'red';

  return (
    <Box css={{ padding: '20px', border: '1px solid black', borderRadius: '8px' }}>
      <Text css={{ fontSize: '20px', fontWeight: 500, color: 'black' }}>Bitcoin</Text>
      <Text css={{ fontSize: '16px', fontWeight: 500, color: color }}>
        US$ {closePrice}
      </Text>
      <Text css={{ fontSize: '14px', color: color }}>
        {priceIncreased ? '↑ Subiu' : '↓ Desceu'}
      </Text>
    </Box>
  );
};

export default CryptoDataViewer;