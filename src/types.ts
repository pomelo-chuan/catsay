export type BubbleStyle = 'box' | 'topAndBottomLine';

export interface CatOptions {
  text?: string | number;
  eye?: string;
  E?: string;
  mouth?: string;
  /** @deprecated Typo kept for backward compatibility. Use `mouth` instead. */
  mouse?: string;
  M?: string;
  cat?: string;
  C?: string;
  boxStyle?: BubbleStyle;
  B?: BubbleStyle;
  padding?: number;
  maxWidth?: number;
  W?: number;
}

export type CatInput = string | number | CatOptions;
