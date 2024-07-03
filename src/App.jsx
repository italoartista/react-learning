import { useState, useEffect } from 'react'
import { Flex, Box, Text, Card } from '@radix-ui/themes'
import './App.css'



function App() {

  const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m'
  const [data, setData] = useState([])
  const [openTime, setOpenTime] = useState('')
  const [openPrice, setOpenPrice] = useState('')
  const [closePrice, setClosePrice] = useState('')
  const [highPrice, setHighPrice] = useState('')
  const [lowPrice, setLowPrice] = useState('')
  const [volume, setVolume] = useState('')
  const [closeTime, setCloseTime] = useState()
  const [quoteAssetVolume, setQuoteAssetVolume] = useState('')
  const [numberOfTrades, setNumberOfTrades] = useState(0)

  
  useEffect(() => {
    async function buscar(url) {
      const response = await fetch(url)
      const data = await response.json()
      setData(data[499])
      setOpenTime(data[data.length - 1][0])
      setOpenPrice(data[data.length - 1][1])
      setHighPrice(data[data.length - 1][2])
      setLowPrice(data[data.length - 1][3])
      setClosePrice(data[data.length - 1][4])
      setVolume(data[data.length - 1][5])
      setCloseTime(data[data.length - 1][6])
      setQuoteAssetVolume(data[data.length - 1][7])
      setNumberOfTrades(data[data.length - 1][8])
    }
    buscar(url)
  }, [data])

  return (

    <>
      {



      
      <Flex align='center' justify='center' css={{ height: '100vh' }}>
        <Box css={{ width: 300 }}>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Bitcoin</Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>US$ {openPrice}</Text>
          
          </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>High</Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>US$ {highPrice}</Text>
            </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Low</Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>US$ {lowPrice}</Text>
          </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Close</Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>US$ {closePrice}</Text> 
          </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Volume</Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>{volume}</Text>
          </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Close Time</Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>{closeTime}</Text>
          </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Quote Asset Volume </Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>{quoteAssetVolume}</Text>
          </Card>
          <Card>
            <Text css={{ fontSize: 20, fontWeight: 500 }}>Number of Trades </Text>
            <Text css={{ fontSize: 16, fontWeight: 500 }}>{numberOfTrades}</Text>
          </Card>

        </Box>
      </Flex> }

    </>


  )
}

export default App
