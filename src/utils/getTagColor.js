const colors = {
  css: '#2DA0C3',
  docker: '#637a91',
  gatsby: '#362066',
  git: '#222',
  html: '#E44C21',
  js: '#F0DB4E',
  misc: '#7AAB13',
  node: '#026e00',
  react: '#61DAFB',
  vscode: '#2c2c32',
};

const getTagColor = tag => colors[tag] || '';

export default getTagColor;
