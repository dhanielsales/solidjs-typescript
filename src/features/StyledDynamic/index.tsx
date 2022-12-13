import { splitProps, createSignal, createEffect } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { css, StylesArg } from 'solid-styled-components';

import {
  createStyleFromProps,
  CSSProperties,
  cssPropertiesKeys,
} from '@shared/utils/css-properties';

import type { ComponentWithAsRequired } from '@shared/types/component-with-as';

export const StyledDynamic: ComponentWithAsRequired<CSSProperties> = (_props) => {
  const [props, rest] = splitProps(_props, ['as', 'children', ...cssPropertiesKeys]);

  const [htmlClass, setHtmlClass] = createSignal(css(createStyleFromProps(props) as StylesArg));

  createEffect(() => {
    setHtmlClass(css(createStyleFromProps(props) as StylesArg));
  });

  return (
    <Dynamic class={htmlClass()} component={props.as} {...rest}>
      {props.children}
    </Dynamic>
  );
};
