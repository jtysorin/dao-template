import { network } from "hardhat";

function sleep(timeInMs: number) {
  return new Promise((resolve) => setTimeout(resolve, timeInMs));
}

async function moveBlocks(amount: number, sleepAmount: number = 0) {
  console.log("Moving blocks...");
  for (let index = 0; index < amount; index++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    });
    if (sleepAmount) {
      console.log(`Sleep for ${sleepAmount}`);
      await sleep(sleepAmount);
    }
  }
}

export { moveBlocks, sleep };
