import { useCallback,useMemo, useState } from "react";
import  { ethers }  from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";


const providerOptions = {

  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc:{
        100: "https://rpc.gnosischain.com/",
        80001: "https://rpc-mumbai.maticvigil.com"
      }
    }
  }


};


const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
});


function useWeb3Modal(config = {}) {
  const [provider, setProvider] = useState(new ethers.JsonRpcProvider("https://goerli.infura.io/v3/"+process.env.REACT_APP_INFURA));
  const [coinbase, setCoinbase] = useState();
  const [netId , setNetId] = useState(5);
  const [connecting , setConnecting] = useState();
  const [noProvider , setNoProvider] = useState();
  //const [cyberConnect , setCyberConnect] = useState();
  // UNS Login User
  const [user,setUser] = useState()
  const [autoLoaded, setAutoLoaded] = useState(false);
  // Web3Modal also supports many other wallets.
  // You can see other options at https://github.com/Web3Modal/web3modal
  const logoutOfWeb3Modal = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      setCoinbase();
      setNetId(80001);
      setProvider(new ethers.JsonRpcProvider("https://goerli.infura.io/v3/"+process.env.REACT_APP_INFURA))
      setUser();
    },
    [],
  );
  // Open wallet selection modal.
  const loadWeb3Modal = useCallback(async () => {

    try{
      setConnecting(true)
      setAutoLoaded(true);
      const conn = await web3Modal.connect();
      const newProvider = new ethers.BrowserProvider(conn,"any");
      const signer = newProvider.getSigner()
      const newCoinbase = await signer.getAddress();
      const {chainId} = await newProvider.getNetwork();

      setProvider(newProvider);
      setCoinbase(newCoinbase);
      setNetId(chainId);
      setNoProvider(true);
      setConnecting(false);
      // UNS User
      new UAuth(uauthOptions).user().then(async user => {
        console.log(user)
        setUser(user);
      }).catch(err => {
        console.log(err);

      })
      conn.on('accountsChanged', accounts => {
        const newProvider = new ethers.BrowserProvider(conn,"any");
        setProvider(newProvider)
        setCoinbase(accounts[0]);
      });
      conn.on('chainChanged', async chainId => {
        window.location.reload();
      });
      // Subscribe to provider disconnection
      conn.on("disconnect", async (error: { code: number; message: string }) => {
        logoutOfWeb3Modal();
      });
      conn.on("close", async () => {
        logoutOfWeb3Modal();
      });

      return;
    } catch(err){
      console.log(err);
      setConnecting(false)
      logoutOfWeb3Modal();
    }

  }, [logoutOfWeb3Modal]);




  // If autoLoad is enabled and the the wallet had been loaded before, load it automatically now.
  useMemo(() => {
    if (!autoLoaded && web3Modal.cachedProvider) {
      try{
        setAutoLoaded(true);
        loadWeb3Modal();
        setNoProvider(true);
      } catch(err){
        console.log(err)
        logoutOfWeb3Modal();
      }
    }
  },[autoLoaded,loadWeb3Modal]);



  return({provider, loadWeb3Modal, logoutOfWeb3Modal,coinbase,netId,connecting,user});
}



export default useWeb3Modal;
