import stringWidth from 'string-width';

export function generateChar(char: string, count: number): string {
  return Array.from({ length: Math.max(0, count) }, () => char).join('');
}

export function numberArrayMax(values: number[]): number {
  return values.reduce((max, value) => (max > value ? max : value), 0);
}

export function computeBreakPoint(text: string, maxWidth = 40): number {
  const safeMaxWidth = Math.max(1, maxWidth);
  const widestLine = numberArrayMax(text.split('\n').map((line) => stringWidth(line)));
  return Math.min(widestLine, safeMaxWidth);
}

export function getTextList(text: string, breakPoint: number): string[] {
  const textList: string[] = [];
  const safeBreakPoint = Math.max(1, breakPoint);

  for (const logicalLine of text.split('\n')) {
    if (!logicalLine) {
      textList.push('');
      continue;
    }

    let currentLine = '';
    let currentWidth = 0;

    for (const character of logicalLine) {
      const characterWidth = stringWidth(character);

      if (currentLine && currentWidth + characterWidth > safeBreakPoint) {
        textList.push(currentLine);
        currentLine = character;
        currentWidth = characterWidth;
        continue;
      }

      currentLine += character;
      currentWidth += characterWidth;
    }

    if (currentLine) {
      textList.push(currentLine);
    }
  }

  return textList;
}

export function border(textList: string[], breakPoint: number, padding = 0): string[] {
  const result = [`┌${generateChar('─', breakPoint + padding * 2)}┐`];

  textList.forEach((line) => {
    result.push(
      `│${generateChar(' ', padding)}${line}${generateChar(' ', breakPoint - stringWidth(line))}${generateChar(' ', padding)}│`,
    );
  });

  result.push(`└${generateChar('─', breakPoint + padding * 2)}┘`);
  return result;
}

export function topAndBottomLine(textList: string[], breakPoint: number, padding = 0): string[] {
  const divider = generateChar('-', breakPoint + padding * 2);
  const result = [divider];

  textList.forEach((line) => {
    result.push(`${generateChar(' ', padding)}${line}${generateChar(' ', padding)}`);
  });

  result.push(divider);
  return result;
}
