const ToshiCoin = artifacts.require('ToshiCoin');
const ShimmerCoin = artifacts.require('ShimmerCoin');

module.exports = function (deployer) {
  deployer.deploy(ToshiCoin);
  deployer.deploy(ShimmerCoin);
};

