function getCat(options) {
  const { eye, e, E, mouth, m, M } = options || {};
  const tpl =
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

  return tpl
    .replace(/EYE/g, eye || e || E || '@')
    .replace(/MOUTH/g, mouth || m || M || 'm');
}

export {
  getCat,
};
