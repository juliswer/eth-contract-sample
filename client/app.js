App = {
  web3Provider: "",

  init: () => {
    console.log("Loaded");
    App.loadEthereum();
  },

  loadEthereum: async () => {
    if(window.ethereum) {
        App.web3Provider = window.ethereum;
        await window.ethereum.request({method: 'eth_requestAccounts'});
    }
  },
};

App.init();
