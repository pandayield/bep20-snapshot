"use strict";

const path = require("path");
const abi = require("./abi");

const parameters = {
  abi: abi.getABI(),
  configFileName: path.join(process.cwd(), "snapshot.config.json"),
  configQuestions: [
    {
      type: "input",
      name: "provider",
      message: "Enter the URL of web3 provider",
      default: "https://bsc-dataseed.binance.org"
    },
    {
      type: "input",
      name: "contractAddress",
      message: "Enter your contract address"
    },
    {
      type: "input",
      name: "fromBlock",
      message: "Enter the block number to start from",
      default: 4258888
    },
    {
      type: "input",
      name: "toBlock",
      message: "Enter the block number to end at",
      default: 4657200
    },
    {
      type: "input",
      name: "blocksPerBatch",
      message: "Blocks per batch",
      default: 4000
    },
    {
      type: "input",
      name: "delay",
      message: "Delay per iteration (ms)",
      default: 1000
    },
    {
      type: "input",
      name: "format",
      message: "Format -> csv, json, both",
      default: "both"
    },
    {
      type: "input",
      name: "checkIfContract",
      message: "Check addresses if they are contracts or wallets?",
      default: "yes"
    }
  ],
  knownTypes: path.join(process.cwd(), "/.cache/known-types.json"),
  outputFileNameCSV: path.join(process.cwd(), "./balances/{token}.csv"),
  outputFileNameJSON: path.join(process.cwd(), "./balances/{token}.json"),
  eventsDownloadFolder: path.join(process.cwd(), "./tx/{token}/"),
  eventsDownloadFilePath: path.join(process.cwd(), "./tx/{token}/{blockNumber}.json")
};

module.exports.get = () => {
  return parameters;
};
