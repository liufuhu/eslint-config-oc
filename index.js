module.exports = {
  extends: [
    './index',
    './rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {},
};
