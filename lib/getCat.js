function getCat(options) {
  const { eye, e, E, mouth, m, M } = options || {};
  const tpl =
    '      |\\_|\\                \n' +
    '      |EYE.EYE |______________ \n' +
    '      >\\mouth_<          _____)\n' +
    '         \\_  ______ \\     \n' +
    '         / /   / / \\ \\   \n' +
    '        (_/   (_/   \\_)   \n'
    ;
  return tpl
    .replace(/EYE/g, eye || e || E || '@')
    .replace(/mouth/g, mouth || m || M || 'm');
}

export {
  getCat,
};