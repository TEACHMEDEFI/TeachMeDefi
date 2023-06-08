// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract TMDQuest is ERC721, Ownable {
    using Counters for Counters.Counter;

    string public baseURI;
    bool private mintable = true;

    Counters.Counter public tokenIds;

    mapping(address => bool) private _minted;
    constructor(string memory _baseUri, string memory _collectionName, string memory _tokenCounter)
        ERC721(_collectionName, _tokenCounter) {
        baseURI = _baseUri;
    }

    function setBaseURI(string memory _questBaseURI) external onlyOwner {
        baseURI = _questBaseURI;
    }

    function setMintable(bool _mintable) external onlyOwner {
        mintable = _mintable;
    }


    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);
        return bytes(baseURI).length > 0 ? string(baseURI) : "";
    }

    function mint () external {
        require(mintable == true && !_minted[_msgSender()], "Not mintable or already minted");

        tokenIds.increment();
        _mint(_msgSender(), tokenIds.current());

        _minted[_msgSender()] = true;
        
    }
}
