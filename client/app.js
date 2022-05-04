App = {
  web3Provider: "",

  init: () => {
    console.log("Loaded");
    App.loadEthereum();
  },

  loadEthereum: () => {
    if (typeof window.ethereum == "undefined") {
      alert("Please install metamask");
    } else {
        App.web3Provider = window.ethereum;
    }
  },
};

App.init();
