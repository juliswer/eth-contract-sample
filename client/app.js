App = {
  contracts: {},

  init: async () => {
    await App.loadEthereum();
    await App.loadContracts();
    await App.loadAccount();
    await App.renderTasks();
    App.render();
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

  loadAccount: async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    App.account = accounts[0];
  },

  loadContracts: async () => {
    const res = await fetch("TasksContract.json");
    const tasksContractJSON = await res.json();

    App.contracts.taskContract = TruffleContract(tasksContractJSON);

    App.contracts.taskContract.setProvider(App.web3Provider);

    App.tasksContract = await App.contracts.taskContract.deployed();
  },

  render: async () => {
    document.getElementById("account").innerText = App.account;
  },

  renderTasks: async () => {
    const taskCounter = await App.tasksContract.taskCounter();
    const taskCounterNumber = taskCounter.toNumber();

    let html = "";

    for (let i = 0; i <= taskCounterNumber; i++) {
      const task = await App.tasksContract.tasks(i);
      const taskId = task[0];
      const taskTitle = task[1];
      const taskDescription = task[2];
      const taskDone = task[3];
      const taskCreated = task[4];

      let taskElement = `
        <div class="card bg-dark rounded mb-2">
          <div className="card-header">
            <span>${taskTitle}</span>
          </div>
          <div className="card-body">
            <p>${taskDescription}</p>
          </div>
        </div>
      `;
      html += taskElement;
    }
    document.querySelector("#tasksList").innerHTML = html;
  },

  createTask: async (title, description) => {
    const result = await App.tasksContract.createTask(title, description, {
      from: App.account,
    });
    console.log(result.logs[0].args);
  },
};
