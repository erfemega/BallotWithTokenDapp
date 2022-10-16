import axios from "axios";
import { useEffect, useState } from "react";

interface tokenData {
  tokenInfo: {
    name: string;
    symbol: string;
    address: string;
  };
  totalSupply: number;
}

function TokenData() {
  let initial: tokenData = {
    tokenInfo: {name: "", symbol: "", address: ""},
    totalSupply: 0
  };
  const [tokenData, setTokenData] = useState(initial);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3001/token/data').then((response) => {
      console.log(response);
      setTokenData(response.data);
    }).catch((error) => {
      console.error('There was an error fetching the token data:', error.message);
    })
  }, []);

  return <div>
    <h1>{tokenData.tokenInfo.name} Token details:</h1>
    <p>Symbol: {tokenData.tokenInfo.symbol}</p>
    <p>Address: {tokenData.tokenInfo.address}</p>
    <p>TotalSupply: {tokenData.totalSupply}</p>
  </div>;
}

export default TokenData