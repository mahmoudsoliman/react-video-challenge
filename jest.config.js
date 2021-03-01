module.exports = {
  setupFilesAfterEnv: ["<rootDir>/tests/setup/setupTests.js", "<rootDir>/tests/setup/setupEnzyme.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
}