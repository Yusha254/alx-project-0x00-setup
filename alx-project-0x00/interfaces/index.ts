export interface PillProps {
  title: string
}

export type ButtonSize = "small" | "medium" | "large";
export type ButtonShape = "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";

export interface ButtonProps {
  title: string;
  size?: ButtonSize;
  shape?: ButtonShape;
  styles: string; 
  onClick?: () => void;
}