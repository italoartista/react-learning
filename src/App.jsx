
import useFetchCryptoData from './hooks/useFetchCryptoData'
import CryptoDataViewer from './componentes/viz/CryptoDataViewer';


import './App.css'



function App() {

  const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m';
  const { data, isLoading } = useFetchCryptoData(url);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CryptoDataViewer openPrice={data.openPrice} closePrice={data.closePrice} />
    </div>
  );
}

export default App
