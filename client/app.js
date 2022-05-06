App = {
  init: () => {
    App.loadEthereum();
  },

  loadEthereum: async () => {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("No web3? You should consider trying MetaMask!");
    }
  },
};

App.init();
