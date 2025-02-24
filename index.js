import chalk from "chalk";
import figlet from "figlet";
import fs from "fs/promises";
import vote from "./DAPPS/aicraft.js";
import deposit from "./DAPPS/apriori.js";
import swapOnBebop from "./DAPPS/bebop.js";
import { kuruLite } from "./DAPPS/kuru.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const displayBanner = () => {
  console.log(
    chalk.cyan(
      figlet.textSync("Makmum Airdrop", {
        font: "Slant",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
    )
  );
  const hakari = chalk.bgBlue("Created by https://t.me/hakaringetroll");
  console.log(hakari);
  console.log("Join To get Info airdrop : https://t.me/makmum");
};

const main = async () => {
  displayBanner();
  console.log(
    chalk.yellow(`Auto vote, stake, unstake, wrap Eth, and Swap on Monad`)
  );
  const wallet = (await fs.readFile("wallet.txt", "utf-8"))
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);

  while (true) {
    for (let i = 0; i < wallet.length; i++) {
      console.log(chalk.blue(`Start With Wallet ${i + 1}`));
      try {
        const privateKey = wallet[i];
        console.log(chalk.yellow("Start Vote to Aicraft"));
        const voteMessage = await vote(privateKey);
        console.log(chalk.green(voteMessage));
        console.log(chalk.yellow("Start Stake and Unstake on Apriori"));
        const depositMessage = await deposit(privateKey);
        console.log(chalk.green(depositMessage.stakeMessage));
        console.log(chalk.green(depositMessage.unstakeMessage));
        console.log(chalk.yellow("Start Wrap And Unwrap ETH on Bebop"));
        const swapMessage = await swapOnBebop(privateKey);
        console.log(chalk.green(swapMessage.wrapMessage));
        console.log(chalk.green(swapMessage.unwrapMessage));
        console.log(chalk.yellow("Start Swap Monad to HOCHi on Kuru Lite"));
        const kuruMessage = await kuruLite(privateKey);
        console.log(chalk.green(kuruMessage));
      } catch (err) {
        console.log(err);
      }
    }
    console.log(chalk.blue("Wait 24 Hour to Swap daily again ..."));
    await delay(86400000);
  }
};

main();
