import React, { useState } from 'react'
import {ethers} from 'ethers'

import "./EthereumWallet.css"
import MetaPopWindow from './MetaPopWindow';
import { useDispatch } from 'react-redux';
import { userAction } from '../redux/actions/userAction';

function EthereumWallet() {

    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [walletConnected, setWalletConnected] = useState(false)
    const [isMetaInstalled, setIsMetaInstalled] = useState(false)

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
                setWalletConnected(true)
				getAccountBalance(result[0]);

               
                
			})
			.catch(error => {
				// setErrorMessage(error);
                console.log("### error ###", error)
			});

		} 

        else{

            alert("Need to install metaMask")
        }
      
          
      
       
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));

             //  dispatch Action to store useAccount and userBalance

             dispatch(userAction({
                defaultAccount:account,
                userBalance:ethers.utils.formatEther(balance)
            }))

		})
		.catch(error => {
			setErrorMessage("error >>>>>>>>> ",error);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum && window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum && window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <div>
            
            {/* <h4> {"Connection to MetaMask using window.ethereum methods"} </h4> */}

           
		


            {walletConnected ?
                <div className="ethereumWallet__balance">
                    Eth : $ {userBalance} USD
                </div>
                :
                <button className="ethereumWallet__connectBtn"  onClick={connectWalletHandler}>{connButtonText}</button>
            }
			{/* <div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage} */}
        </div>
    )
}

export default EthereumWallet
