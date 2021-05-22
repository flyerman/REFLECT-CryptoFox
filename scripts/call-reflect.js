async function main() {

    const [account] = await ethers.getSigners()
    console.log("Account balance:", (await account.getBalance()).toString())

    const contractAddr = "0x49162908a4b3b4b1d90bd67d7d191bfefc6f43ad"
    const Token = await ethers.getContractAt("REFLECT", contractAddr)

    const totalFees = await Token.totalFees()
    console.log("Total fees:", ethers.utils.formatUnits(totalFees, unit = "ether"))

    const name = await Token.name()
    console.log("Name: ", name)

    const myBalance = await Token.balanceOf("0x04ff4E0c05c0FeaccCF93251c52A78639E0ABeF4")
    console.log("My balance: ", ethers.utils.formatUnits(myBalance, unit = "gwei"))
  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });