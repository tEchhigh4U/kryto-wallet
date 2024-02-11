// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
   }

    // Array of transactions
   TransferStruct[] transactions;

    // Add a transaction to the blockchain
   function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
     transactionCount += 1;

     // Store the transaction into the array
     transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

     // Emit the event
     emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
   }

   // Get all transactions
   function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
   }

    // Get the number of transactions
   function getTransactionCount() public view returns (uint256){
        return transactionCount;
   }
}
