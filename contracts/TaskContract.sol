// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TaskContract {

    struct Task {
        uint id;
        string title;
        string description;
        bool done;
        uint256 createdAt;
    }
    
    mapping (uint256 => Task) public tasks;

}