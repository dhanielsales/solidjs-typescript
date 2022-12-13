import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { css, StylesArg } from 'solid-styled-components';

import {
  createStyleFromProps,
  CSSProperties,
  cssPropertiesKeys,
} from '@shared/utils/css-properties';

import type { ComponentWithAs } from '@shared/types/component-with-as';

export const Box: ComponentWithAs<CSSProperties> = (_props) => {
  const [props, rest] = splitProps(_props, ['as', 'children', ...cssPropertiesKeys]);

  const htmlClass = css(createStyleFromProps(props) as StylesArg);

  return (
    <Dynamic class={htmlClass} component={props.as ?? 'div'} {...rest}>
      {props.children}
    </Dynamic>
  );
};
