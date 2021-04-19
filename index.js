// module.exports = (req, res) => 'Hello World'
const randomNumberGenerator = (precision) => {
  return Math.floor(Math.random() * precision)
}

module.exports = (req, res) => {
  const coin = randomNumberGenerator(1000) % 2 == 0 ? 'Heads' : 'Tails'
  return {
    data: coin,
  }
}
