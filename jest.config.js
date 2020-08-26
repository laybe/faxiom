module.exports = {
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
}
