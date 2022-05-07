App = {
  contracts: {},

  init: () => {
    App.loadEthereum();
    App.loadContracts();
  },

  loadEthereum: async () => {
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      await ethereum.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("No web3? You should consider trying MetaMask!");
    }
  },

  loadContracts: async () => {
    const res = await fetch("TasksContract.json");
    const tasksContractJSON = await res.json();

    App.contracts.taskContract = TruffleContract(tasksContractJSON);

    App.contracts.taskContract.setProvider(App.web3Provider);

    App.tasksContract = await App.contracts.taskContract.deployed();
  },
};

App.init();
