function getCat(options) {
  const { eye, E, mouth, M, cat, C } = options || {};
  const miao =
    '   /\\___/\\\n' +
    '  /       \\\n' +
    ' |  EYE   EYE  |\n' +
    '>===  *  ===<\n' +
    '  \\   MOUTH   /\n' +
    '    ======\n' +
    '  /       \\ __\n' +
    ' |         |\\ \\\n' +
    ' |         |/ /\n' +
    ' |  || ||  |_/\n' +
    '  \\_oo_oo_/\n'
    ;
  const q =
    '      |\\_|\\                \n' +
    '      |EYE.EYE |______________\n' +
    '      >\\MOUTH <          ______)\n' +
    '         \\_  ______ \\     \n' +
    '         / /   / / \\ \\   \n' +
    '        (_/   (_/   \\_)   \n'
    ;
  const catMap = {
    q,
    miao,
  };
  const tpl = catMap[cat || C] || q;
  return tpl
    .replace(/EYE/g, eye || E || '@')
    .replace(/MOUTH/g, mouth || M || 'm');
}

export {
  getCat,
};
