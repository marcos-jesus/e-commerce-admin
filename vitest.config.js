module.exports = {
  // A pasta onde estão os testes
  testDir: 'tests',

  // Opções para o Jest
  jestOptions: {
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    }
  }
}
