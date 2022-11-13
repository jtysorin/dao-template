import { network } from "hardhat";
async function moveTime(amount: number) {
  console.log("Moving time...");
  await network.provider.send("evm_increaseTime", [amount]);
  console.log(`Moved forward ${amount} seconds`);
}

export { moveTime };
