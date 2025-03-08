import chalk from "chalk";
import figlet from "figlet";
import fs from "fs/promises";
import vote from "./DAPPS/aicraft.js";
import deposit from "./DAPPS/apriori.js";
import swapOnBebop from "./DAPPS/bebop.js";
import { swapMonadbean, swapUsdcbean } from "./DAPPS/beanExchange.js";
import monorail from "./DAPPS/monorail.js";
import kintzu from "./DAPPS/kintzu.js";
import swaponRubic from "./DAPPS/rubic.js";
import stakeOnmagma from "./DAPPS/magmastaking.js";
import monadex from "./DAPPS/monadex/monadex.js";
import shmonad from "./DAPPS/shmonad.js";

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
        console.log(chalk.yellow("Start Swap Monad to Usdc on Bean.exchange"));
        const beanMessage = await swapMonadbean(privateKey);
        const usdcbeanMessage = await swapUsdcbean(privateKey);
        console.log(chalk.green(beanMessage));
        console.log(chalk.green(usdcbeanMessage));
        console.log(chalk.yellow("Start Swap Monad to Chog on monorail"));
        const monorailMessage = await monorail(privateKey);
        console.log(chalk.green(monorailMessage));
        console.log(chalk.yellow("Start Stake and Unstake on Kintzu"));
        const kintzuMessage = await kintzu(privateKey);
        console.log(chalk.green(kintzuMessage.stakeMessage));
        console.log(chalk.green(kintzuMessage.unstakeMessage));
        console.log(chalk.yellow("Start Swap Monad To Usdt On Rubic"));
        const rubicMessage = await swaponRubic(privateKey);
        console.log(chalk.green(rubicMessage));
        console.log(chalk.yellow("Start Stake Monad To MagmaStaking"));
        const magmaStake = await stakeOnmagma(privateKey);
        console.log(chalk.green(magmaStake.stakeMessage));
        console.log(chalk.green(magmaStake.unstakeMessage));
        console.log(chalk.yellow("Start Stake Monad To Shmonad"));
        const shmonadMessage = await shmonad(wallet[i]);
        if (!shmonadMessage.error) {
          console.log(chalk.green(shmonadMessage.messageStake));
          console.log(chalk.green(shmonadMessage.messageCommitTo4337Paymaster));
          console.log(chalk.green(shmonadMessage.messageCommitToTaskManager));
        } else {
          console.log(chalk.red(shmonadMessage.error));
        }
        console.log(
          chalk.yellow(
            "Start Swap Monad To Shmonad and add Liquidty wMonad And shMonad on Monadex"
          )
        );
        const monadexMessage = await monadex(wallet[i]);
        console.log(chalk.green(monadexMessage.message));
        console.log(chalk.green(monadexMessage.liquidityMessage));
      } catch (err) {
        console.log(err);
      }
    }
    console.log(chalk.blue("Wait 24 Hour to Swap daily again ..."));
    await delay(86400000);
  }
};

main();
