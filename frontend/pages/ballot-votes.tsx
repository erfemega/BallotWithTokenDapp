import axios from "axios";
import { useEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks" 

interface ballotData {
  name: string;
	voteCount: string;
}

function BallotVotes() {
  let initialBallots: ballotData[] = [
			{
				name: "",
				voteCount: ""
			}
		]
  const [ballotData, setBallotData] = useState(initialBallots);
  const [isLoading, setIsLoading] = useState(false);
	const { address, chainId, provider } = useWeb3();

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3001/ballot/proposals').then((response) => {
      console.log(response);
      setBallotData(response.data);
    }).catch((error) => {
      console.error('There was an error fetching the token data:', error.message);
    })
  }, []);

	const ballotHTML = ballotData.map((ballot, i) => (
		<div key={i}>
			<p>Proposal Name: {ballot.name}</p>
			<p>Votecount: {ballot.voteCount}</p>
		</div>
	))

  return <div>
		{ballotHTML}
  </div>;
}

export default BallotVotes