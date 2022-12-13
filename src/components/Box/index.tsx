import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { css } from 'solid-styled-components';

import type { StylesArg } from 'solid-styled-components';
import type { CSSProperties } from '../../shared/types/css-properties';
import type { ComponentWithAs } from '@shared/types/component-with-as';

export const Box: ComponentWithAs<CSSProperties> = (_props) => {
  const [props, style] = splitProps(_props, ['as', 'children']);

  const htmlClass = css(style as StylesArg);

  return (
    <Dynamic component={props.as ?? 'div'} class={htmlClass}>
      {props.children}
    </Dynamic>
  );
};
