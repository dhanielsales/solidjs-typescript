import { CSSProperties, cssPropertiesKeys } from './types';

export function createStyleFromProps(values: CSSProperties): CSSProperties {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};

  for (const p of Object.keys(values)) {
    const prop = p as keyof CSSProperties;

    if (cssPropertiesKeys.includes(prop)) {
      if (values[prop] !== undefined) {
        result[prop] = values[prop];
      }
    }
  }

  return result;
}
