const TasksContract = artifacts.require("TasksContract");

contract("TasksContract", () => {
  before(async () => {
    this.tasksContract = await TasksContract.deployed();
  });

  it("migrate deployed succesfully", async () => {
    const address = this.tasksContract.address;

    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("Get tasks List", async () => {
    const taskCounter = await this.tasksContract.taskCounter();
    const task = await this.tasksContract.tasks(taskCounter);

    assert.equal(task.id.toNumber(), taskCounter);

  });
});
