const colors = {
  vscode: '#B31917',
  css: '#2DA0C3',
  js: '#D6BA32',
  html: '#EB7728',
  react: '#7D669E',
  node: '#7AAB13',
  docker: '#637a91',
  git: '#222',
};

const getTagColor = tag => colors[tag] || '';

export default getTagColor;
