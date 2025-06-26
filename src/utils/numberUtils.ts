export interface NumberFormatProps extends Intl.NumberFormatOptions {
  value: number | undefined;
}
export default class NumberUtils {
  static format(props: NumberFormatProps): string {
    const { value, ...otherProps } = props;

    return value !== undefined
      ? new Intl.NumberFormat("en", otherProps).format(value)
      : "";
  }
}
