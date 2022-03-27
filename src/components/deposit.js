import {useState} from "react";
import {ethers} from "ethers";

import SimpleWallet from "../artifacts/contracts/ProjectWallet.sol/SimpleWallet.json";

const Deposit = () =>{
    const[amount, setAmount] = useState("");


    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      }




    return(
        <div className="App">

        </div>
    );
}
export default SimpleWallet;