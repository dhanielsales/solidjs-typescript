import { splitProps, createSignal, createEffect } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { css, StylesArg } from 'solid-styled-components';

import { createStyleFromProps, CSSProperties } from '@shared/utils/css-properties';

import type { ComponentWithAsRequired } from '@shared/types/component-with-as';
import { mergeClass } from '@shared/utils/merge-class';

export const StyledDynamic: ComponentWithAsRequired<CSSProperties> = (_props) => {
  const [props, rest] = splitProps(_props, ['as', 'children', 'class']);

  const [htmlClass, setHtmlClass] = createSignal(css(createStyleFromProps(rest) as StylesArg));

  createEffect(() => {
    setHtmlClass(css(createStyleFromProps(rest) as StylesArg));
  });

  return (
    <Dynamic class={mergeClass(htmlClass(), props.class)} component={props.as} {...rest}>
      {props.children}
    </Dynamic>
  );
};
