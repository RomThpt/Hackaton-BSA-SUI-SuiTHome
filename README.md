# 🏠 Real-World Asset Tokenization DApp 🌍

## Welcome to our Real-World Asset (RWA) Tokenization DApp! 🚀
Built on the Sui blockchain, this **DApp** bridges the physical and digital worlds, allowing users to tokenize real-world assets and trade them effortlessly using cutting-edge decentralized technologies like **ZKLogin, Sui Kiosk, and NFTs**.

### 🧠 What We’re Building
Imagine owning, trading, and proving ownership of real-world assets (think real estate, art, or cars!) as easily as digital items. Our DApp brings this vision to life, offering:

- ZKLogin Integration: Hassle-free, privacy-focused login without revealing sensitive information. Own your data, control your identity.
- Sui Kiosk: A decentralized marketplace for listing and trading RWAs securely. Every item stays safe in the owner's control until sold.
- Custom NFTs: Each RWA is represented by an NFT, carrying metadata, proof of ownership, and supporting documents.
### 🎯 Key Features
 - Simple & Secure Authentication: Using ZKLogin, users can sign in without compromising their privacy.
- Seamless Asset Management: Create, list, and trade real-world asset NFTs using the power of Sui Kiosk.
- NFT Backing for RWAs: Each tokenized asset is an NFT, holding all essential data like certificates, images, or legal docs in the supporting_uri.
- Decentralized Trading: Use Sui’s Kiosk to place your NFTs for sale or auction. No middlemen, just pure ownership.
### 🔥 Why This Matters
Tokenizing real-world assets unlocks liquidity, transparency, and global accessibility for traditionally illiquid markets. Whether you're investing in a Picasso or selling your car, this platform gives you the tools to do it securely and easily.

## 👨‍💻 Getting Started
Prerequisites
Sui Wallet
Sui CLI installed
Basic knowledge of NFTs and blockchain
How to Run
Clone this repository:

```bash
git clone https://github.com/yourrepo/sui-rwa-dapp.git
cd sui-rwa-dapp
Deploy the DApp: Using Sui CLI, deploy the contracts:
```

```bash
sui move build
sui move publish --gas-budget 1000000000
```

Create Your First RWA NFT: Using the provided functions in the nft module:

```move
module nft::nft;
nft::createRwaNft(name: vector<u8>, supporting_uri: vector<u8>);
```
List the NFT on Sui Kiosk: After minting, list your NFT for sale:

```move
kiosk::place_and_list(kiosk_id, owner_cap, nft_id, price);
Log in with ZKLogin: Login seamlessly with privacy protection, secured by zero-knowledge proofs!
```

###  🎨 Built With
Sui Blockchain: Scalable, high-performance blockchain.
ZKLogin: Privacy-first login.
Sui Kiosk: Decentralized marketplace for secure trading.
### 👥 Team
Antoine Espieux |
Amaury Mongreville | 
Johann Cali | 
Romain Thépaut
### 🚀 Join Us
Follow our journey and contribute to revolutionizing real-world asset trading on the blockchain!

Feel free to tweak any details specific to your project!






