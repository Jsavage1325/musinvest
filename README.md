# Parto
Turn future streaming revenue of your music into a token and sell it

Demo: https://parto.one
[Figma prototype](https://www.figma.com/proto/8DUvZY9hKr9iYvYX4gRYen/Finity-Design-System-%F0%9F%92%9C-(Community)?page-id=35431%3A26372&node-id=35474%3A28600&viewport=241%2C48%2C0.12&scaling=min-zoom&starting-point-node-id=35474%3A28600)

## Description:
### Smart contracts
1. Reward token: This ERC20 token is minted when there is revenue to be distributed.
2. Super token: This is Superfluid contract that wraps Reward token for easy distribution. The newly minted tokens will be wrapped in Super token and distributed to Song token owners.
3. Brains contract:
This contract checks how many Reward tokens should be distributed at the certain time by communicating with UMA Oracle. It then uses Song token to determine how it should distribute reward tokens, and distributes the tokens. Individual parts of the contract are:
3.1. Instant Distribution Agreement             It distributes Reward tokens to Song tokens owners.
3.2. Song token             ERC20, it represents share in the stream revenues for a particular song.
3.3. UMA Oracle Interface             It asks UMA Oracle if the proposed Reward token quantity is proportional to the number of streams / views / listens.


### Backend
IPFS + Piñata

We store song and license information on IPFS. When the Song contract is constructed, we add the IPFS hash in a variable so anyone can use getter to check what rights does this token include. We use Piñata to ensure this information is always available.

### Frontend
Web3Auth
We use Web3Auth to enable users to log in with either their web2 credentials or their Ethereal wallet.

NextJS + Chakra + Typescript
The whole frontend is built in these tools.

### Design
Polygon Finity Design System
Figma

## Team
*Albert Corsali*, Frontend and backend
*Antonija Elpeza*, Design
*Jeremy Savage*, Smart contracts
*Samuel Pink*, Smart contracts
*Tomislav Mamić*, Product management
