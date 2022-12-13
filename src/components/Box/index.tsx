import { splitProps } from 'solid-js';
import { StyledDynamic } from '@features/StyledDynamic';

import { CSSProperties } from '@shared/utils/css-properties';

import type { ComponentWithAs } from '@shared/types/component-with-as';

export const Box: ComponentWithAs<CSSProperties> = (_props) => {
  const [props, rest] = splitProps(_props, ['as', 'children']);

  return (
    <StyledDynamic as={props.as ?? 'div'} {...rest}>
      {props.children}
    </StyledDynamic>
  );
};
