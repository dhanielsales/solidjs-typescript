import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { css } from 'solid-styled-components';

import type { Component, JSX, ValidComponent } from 'solid-js';
import type { StylesArg } from 'solid-styled-components';
import type { CSSProperties } from '../../shared/types/css-properties';

interface Props extends CSSProperties {
  children: JSX.Element;
  as?: ValidComponent | string;
}

export const Box: Component<Props> = (_props) => {
  const [props, style] = splitProps(_props, ['as', 'children']);

  const htmlClass = css(style as StylesArg);

  return (
    <Dynamic component={props.as ?? 'div'} class={htmlClass}>
      {props.children}
    </Dynamic>
  );
};
