import { useState } from "react";
import { ethers } from "ethers";
//import {Box, Card, Container, Flex, Heading, Image, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import {ConnectWallet, useBalance, Web3Button} from "@thirdweb-dev/react";
//import waruClan from "./components/waru.png";
import "./styles/Home.css";

export default function Home() {

  const [amountToRedeem,setAmountToRedeem]=useState(0);

  const {data:myWaruBalance}=useBalance("0xE3627374Ac4baf5375e79251B0af23aFc450FC0E");
  //const {data:myMaticBalance}=useBalance("0x0000000000000000000000000000000000001010");
  //const {data:myWMaticBalance}=useBalance("0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270");
  //const {data:mySCPLPBalance}=useBalance("0x96F0EcEcB9d5b2cC0238712A6a987a5102D3B0F7");
  const {data:myWaruV2Balance}=useBalance("0xFA3872970c1952741C518B33f1DcE815f55Dc00A");

  //const {contract:wubiContract}=useContract("0xDE16eA1D873e3dD149c488A4C14B8116244e9b51");
  //const {data:myOwnedNFTs}=useOwnedNFTs(wubiContract,useAddress());

  //const {data:numSub}=useContractRead(wubiContract,"balanceOf",["0x794fA058E009d3595C21F8F58Dc29610083EF0A1"]);
  //const tot = numSub.displayValue;

  //const {contract:cloneRewarderTime}=useContract("0x78B8ABe9E6BF27d3EA68Da096921b77EFCFd389c");
  //const { data:myPendingToken }=useContractRead (cloneRewarderTime, "pendingToken", [59, useAddress()]);

  // const {contract:deWorkContract}=useContract("0xE57B336779A346E6D2b6f82Ddc38B3A21333C2c8");
  // const {data:myDeWorkdNFTs, isLoading:loadingDeWorkNFTs}=useOwnedNFTs(deWorkContract,useAddress());

  return (
    <div className="container">
      <main className="main">

        <h1 className="title">Waru Clan</h1><br/>
        <ConnectWallet>Connect</ConnectWallet>
        <p className="description">Waru Token with 21 million tokens is being replaced with a new token called Waru V2, with a total supply of 2.1 million.</p>
        <p className="description">The new token will be native and adopt the same ticker "WARU".</p>
        <p className="description">Holders of the old version should burn the token to receive the new, at a ratio of 10:1 units, maintaining the same value.</p>
        <p className="description">Before launching the new token, a snapshot of the old token will be taken.</p>
        <hr/>
        <h2>WARU V1 Conversion to WARU V2</h2>

        <div className="grid">

          <div className="card">
            <h3>WARU V1 Balance</h3>
            <p>{myWaruBalance?.displayValue} {myWaruBalance?.symbol}</p>
          </div>

          <div className="card">
            <h3>WARU V1 Amount to Convert</h3>
            <input type="number" value={amountToRedeem} onChange={(e)=>setAmountToRedeem(e.target.value)}/><br/><br/>
            <Web3Button contractAddress="0xE3627374Ac4baf5375e79251B0af23aFc450FC0E" action={(OTOK)=>OTOK.call("approve",["0xFA3872970c1952741C518B33f1DcE815f55Dc00A",ethers.utils.parseEther(amountToRedeem)])}>Approve</Web3Button><br/><br/>
            <Web3Button contractAddress="0xFA3872970c1952741C518B33f1DcE815f55Dc00A" action={async(contract)=>{await contract.call("redeem",[ethers.utils.parseEther(amountToRedeem)]);}}>Convert</Web3Button><br/><br/>
            Min Amount to Convert : 10 wei
          </div>

          <div className="card">
            <h3>WARU V2 Balance</h3>
            <p>{myWaruV2Balance?.displayValue} {myWaruV2Balance?.symbol}</p>
          </div>
        </div>
{/* 
        <hr/>

        <h2>My NFTs</h2>

        <div className="grid">
          {myOwnedNFTs?.map((wubiNFT)=>(
            <div className="card">{wubiNFT.metadata.name}<br/>
              <ThirdwebNftMedia metadata={wubiNFT.metadata} height="200px" width="200px"/>
            </div>
          ))}
        </div> */}

        {/* <hr/>

        <h2>My Tokens</h2>

        <div className="grid">

          <div className="card">
              <h3>Balance</h3>
              <p>{myWaruBalance?.displayValue} {myWaruBalance?.symbol} ({myWaruBalance?.name})</p>
              <p>{myMaticBalance?.displayValue} {myMaticBalance?.symbol} ({myMaticBalance?.name})</p>
              <p>{myWMaticBalance?.displayValue} {myWMaticBalance?.symbol} ({myWMaticBalance?.name})</p>
              <p>{mySCPLPBalance?.displayValue} {mySCPLPBalance?.symbol} ({mySCPLPBalance?.name})</p>
          </div>

          <div className="card">
              <h3>Rewards Sushi LP</h3>
              <p>{myPendingToken && ethers.utils.formatEther(myPendingToken?.toString())} WARU</p>
          </div>

        </div> */}


    {/* <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className="description">
          Get started by configuring your desired network in{" "}
          <code className="code">src/index.js</code>, then modify the{" "}
          <code className="code">src/App.js</code> file!
        </p>
        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
        </div>

        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div> */}


      </main>
    </div>
  );
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// import { ConnectWallet } from "@thirdweb-dev/react";
// import "./styles/Home.css";

// export default function Home() {
//   return (
//     <main className="main">
//       <div className="container">
//         <div className="header">
//           <h1 className="title">
//             Welcome to{" "}
//             <span className="gradient-text-0">
//               <a
//                 href="https://thirdweb.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 thirdweb.
//               </a>
//             </span>
//           </h1>

//           <p className="description">
//             Get started by configuring your desired network in{" "}
//             <code className="code">src/index.js</code>, then modify the{" "}
//             <code className="code">src/App.js</code> file!
//           </p>

//           <div className="connect">
//             <ConnectWallet
//               dropdownPosition={{
//                 side: "bottom",
//                 align: "center",
//               }}
//             />
//           </div>
//         </div>

//         <div className="grid">
//           <a
//             href="https://portal.thirdweb.com/"
//             className="card"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="/images/portal-preview.png"
//               alt="Placeholder preview of starter"
//             />
//             <div className="card-text">
//               <h2 className="gradient-text-1">Portal ➜</h2>
//               <p>
//                 Guides, references, and resources that will help you build with
//                 thirdweb.
//               </p>
//             </div>
//           </a>

//           <a
//             href="https://thirdweb.com/dashboard"
//             className="card"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="/images/dashboard-preview.png"
//               alt="Placeholder preview of starter"
//             />
//             <div className="card-text">
//               <h2 className="gradient-text-2">Dashboard ➜</h2>
//               <p>
//                 Deploy, configure, and manage your smart contracts from the
//                 dashboard.
//               </p>
//             </div>
//           </a>

//           <a
//             href="https://thirdweb.com/templates"
//             className="card"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="/images/templates-preview.png"
//               alt="Placeholder preview of templates"
//             />
//             <div className="card-text">
//               <h2 className="gradient-text-3">Templates ➜</h2>
//               <p>
//                 Discover and clone template projects showcasing thirdweb
//                 features.
//               </p>
//             </div>
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// }
