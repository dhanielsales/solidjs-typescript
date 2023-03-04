import { splitProps } from 'solid-js';

import { StyledDynamic } from '@features/StyledDynamic';
import type { StyledDynamicProps } from '@features/StyledDynamic';

import type { ComponentWithAs } from '@shared/types/ComponentWithAs';

type BoxProps = StyledDynamicProps;

export const Box: ComponentWithAs<BoxProps> = (_props) => {
  const [props, rest] = splitProps(_props, ['as', 'children']);

  return (
    <StyledDynamic as={props.as ?? 'div'} {...rest}>
      {props.children}
    </StyledDynamic>
  );
};
