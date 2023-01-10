/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  setupFilesAfterEnv: ["<rootDir>/jestPostEnvSetup.ts"],
};
