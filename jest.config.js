module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.config.js', 'jest-canvas-mock'],
  testPathIgnorePatterns: ['<rootDir>/src/strategies/SVM/AlgorithmViewSVM/']
};