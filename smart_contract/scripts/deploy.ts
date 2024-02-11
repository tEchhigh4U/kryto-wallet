// To run this script, use the following command:
// npx hardhat run scripts/deploy.ts --network sepolia

import {ethers} from 'hardhat';

const main = async (): Promise<void> => {
  const transactions = await ethers.deployContract("Transactions");

  await transactions.waitForDeployment();

  console.log(`Transactions contract deployed to: ${transactions.target}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // Exit with a success code
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit with an error code
  }
};

runMain();

