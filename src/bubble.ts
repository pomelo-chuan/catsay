import type { BubbleStyle } from './types';
import { border, computeBreakPoint, getTextList, topAndBottomLine } from './utils';

interface BubbleOptions {
  padding?: number;
  maxWidth?: number;
  W?: number;
  type?: 'say' | 'think';
  boxStyle?: BubbleStyle;
  B?: BubbleStyle;
}

export function bubble(text: string, { padding = 2, maxWidth, W, type = 'say', boxStyle, B }: BubbleOptions = {}): string {
  const resolvedBoxStyle = boxStyle || B || 'box';
  const breakPoint = computeBreakPoint(text, maxWidth ?? W ?? 40);
  let textList = getTextList(text, breakPoint);

  if (resolvedBoxStyle === 'topAndBottomLine') {
    textList = topAndBottomLine(textList, breakPoint, padding);
  } else {
    textList = border(textList, breakPoint, padding);
  }

  const arrow = type === 'say' ? '  \\\n   \\\n' : '  O\n   o\n';
  return `${textList.join('\n')}\n${arrow}`;
}
