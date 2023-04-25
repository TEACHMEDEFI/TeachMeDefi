// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract TMDQuestFactory {
    address[] public deployedQuests;
    address owner;

    constructor () {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "caller is not the owner");
        _;
    }

    function createQuest(string memory baseUri) external onlyOwner {
        address newQuest = new TMDQuest(baseUri);
        deployedQuests.push(newQuest);
    }

    function getDeployedQuests() public view returns (address[] memory) {
        return deployedQuests;
    }
}


contract TMDQuest is ERC721, Ownable {
    using Counters for Counters.Counter;

    string public baseURI;
    bool private mintable = false;

    Counters.Counter public tokenIds;

    mapping(address => bool) private _minted;
    constructor(string memory _baseUri) ERC721("TMDQuest", "TMD") {
        baseURI = _baseUri;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _blackSquareBaseURI) external onlyOwner {
        baseURI = _blackSquareBaseURI;
    }

    function setMintable(bool _mintable) external onlyOwner {
        mintable = _mintable;
    }

    function mint () external {
        require(mintable == true && !_minted[_msgSender()], "Not mintable or already minted");

        tokenIds.increment();
        _mint(_msgSender(), tokenIds.current());

        _minted[_msgSender()] = true;
        
    }
}