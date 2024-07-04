import { useState, useEffect } from 'react';

export default function useFetchCryptoData(url) {
  const [data, setData] = useState({
    openTime: '',
    openPrice: '',
    closePrice: '',
    highPrice: '',
    lowPrice: '',
    volume: '',
    closeTime: '',
    quoteAssetVolume: '',
    numberOfTrades: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const rawData = await response.json();
        const latestData = rawData[rawData.length - 1];
        setData({
          openTime: latestData[0],
          openPrice: latestData[1],
          highPrice: latestData[2],
          lowPrice: latestData[3],
          closePrice: latestData[4],
          volume: latestData[5],
          closeTime: latestData[6],
          quoteAssetVolume: latestData[7],
          numberOfTrades: latestData[8],
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  },[url]);

  return { data, isLoading };
}