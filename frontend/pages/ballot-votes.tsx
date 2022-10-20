import axios from "axios";
import { useEffect, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks" 
import { ethers } from 'ethers';
import * as BalletJson from './../assets/TokenizedBallot.json';

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
	const [votingPower, setVotingPower] = useState("");
	const { address, chainId, provider } = useWeb3();
	const BALLOT_ADDRESS = "0x3c631e1e974eAD0C65A45338156c34183040F3b0"
	let ballotContract = new ethers.Contract(
		BALLOT_ADDRESS,
		BalletJson.abi,
		provider
	)

	async function getVotingPower() {
		let votingpower = await ballotContract.votePower(address).catch((err: any) => {
			console.log(err)
		})
		return ethers.BigNumber.from(votingpower).toString()
	}

	if(address){
		ballotContract.votePower(ethers.utils.getAddress(address)).then((response: any) => {
			setVotingPower(ethers.BigNumber.from(response).toString())
		}).catch((err: any) => {
			console.log(err)
		})
	}

  useEffect(() => {
    setIsLoading(true);

    axios.get('http://localhost:3001/ballot/proposals').then((response) => {
      setBallotData(response.data);
    }).catch((error) => {
      console.error('There was an error fetching the token data:', error.message);
    })
  }, []);

	const ballotHTML = ballotData.map(function(ballot, i){
		if(provider?.getSigner() != undefined){
			return(
			<div key={i}>
			<p>Proposal Name: {ballot.name}</p>
			<p>Votecount: {ballot.voteCount}</p>
			<button onClick={() => ballotContract.connect(provider.getSigner()).vote(i, 1)}>Vote for proposal {i}</button>
		</div>)
		} else {
			return(
		<div key={i}>
			<p>Proposal Name: {ballot.name}</p>
			<p>Votecount: {ballot.voteCount}</p>
			<button>log in to metamask</button>
		</div>)
		}
	})

  return <div>
		{ballotHTML}
		<h1>Ballot Contract Address</h1>
		{ballotContract.address}
		<h1>Your voting power:</h1>
		{votingPower}
  </div>;
}

export default BallotVotes