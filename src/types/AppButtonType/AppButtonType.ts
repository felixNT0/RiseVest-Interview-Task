export type AppButtonType = {
  label: string;
  onPress?: () => void | any;
  backgroundColor?: string;
  labelColor?: string;
  disabled?: boolean;
  width?: number | string;
  isLoading?: boolean;
};
