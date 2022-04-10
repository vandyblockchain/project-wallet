import {useState} from "react";
import {ethers, Wallet} from "ethers";

import SimpleWallet from "../artifacts/contracts/ProjectWallet.sol/SimpleWallet.json";

const WalletAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const Deposit = () =>{
    const[amount, setAmount] = useState("");
    const[result, setResult] = useState("");


    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      }

    async function deposit(){
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        try{
            const transaction = await signer.sendTransaction({
                to: WalletAddress,
                value: ethers.utils.parseEther(amount)
            })
            
            const address = await signer.getAddress();
            setResult(`Transaction complete by ${address} who payed ${amount}`);
        }
        catch (err){
            setResult(`Error`);
            console.log("Error: ", err);
        }
    }


    return(
        <div className="App">
            <input
                type="text"
                required
                placeholder="Deposit Amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <div>
                <button onClick={deposit}>
                    Deposit
                </button>
                <br></br>
                {result}
            </div>
        </div>
    );
}
export default Deposit;