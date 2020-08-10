const dark = '#000';
const light = '#fff';

const colors = {
  css: {
    background: '#2DA0C3',
    text: dark,
  },
  react: {
    background: '#61DAFB',
    text: light,
  },
  nextjs: {
    background: dark,
    text: light,
  },
  jest: {
    background: '#10910e',
    text: light,
  },
  'RTL': {
    background: '#FF0000',
    text: light
  },
  'typescript': {
    background: '#3178c6',
    text: light
  },
  js: {
    background: '#F0DB4E',
    text: dark,
  },
  docker: {
    background: '#03423f',
    text: light,
  },
  gatsby: {
    background: '#362066',
    text: light,
  },
  git: {
    background: '#222',
    text: light,
  },
  html: {
    background: '#b03a19',
    text: light,
  },
  misc: {
    background: '#47650b',
    text: light,
  },
  my_year: {
    background: '#0d2c91',
    text: light,
  },
  node: {
    background: '#026e00',
    text: light,
  },
  vscode: {
    background: '#2c2c32',
    text: light,
  },
};

const getTagColor = tag => colors[tag] || '';

export default getTagColor;
