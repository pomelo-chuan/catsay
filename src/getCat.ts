import type { CatOptions } from './types';

export function getCat(options: CatOptions = {}): string {
  const eye = options.eye ?? options.E ?? '@';
  const mouth = options.mouth ?? options.mouse ?? options.M ?? 'm';
  const cat = options.cat ?? options.C ?? 'q';

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
    '  \\_oo_oo_/\n';

  const q =
    '      |\\_|\\                \n' +
    '      |EYE.EYE |______________\n' +
    '      >\\MOUTH <          ______)\n' +
    '         \\_  ______ \\\n' +
    '         / /   / / \\ \\\n' +
    '        (_/   (_/   \\_)\n';

  const mochi =
    '      /\\_/\\\n' +
    '    =( EYE.EYE )=\n' +
    '     (  MOUTH  )\n' +
    '    /|  _  |\\\n' +
    '   /_|_| |_|_\\\n' +
    '     /_/ \\_\\\n';

  const catMap: Record<string, string> = {
    q,
    miao,
    mochi,
  };

  return (catMap[cat] || q).replace(/EYE/g, eye).replace(/MOUTH/g, mouth);
}
