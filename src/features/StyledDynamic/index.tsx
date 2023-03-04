import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { CSSProperties, PseudosObject } from './types';

import type { ComponentWithAsRequired } from '@shared/types/ComponentWithAs';

import { generateClass } from './generate-class';

export interface StyledDynamicProps {
  styling?: CSSProperties;
  pseudos?: PseudosObject;
}

export const StyledDynamic: ComponentWithAsRequired<StyledDynamicProps> = (_props) => {
  const [props, rest] = splitProps(_props, ['as', 'children', 'pseudos', 'styling']);

  // eslint-disable-next-line solid/reactivity
  const { htmlClass } = generateClass({ styling: props.styling, pseudos: props.pseudos });

  return (
    <Dynamic classList={{ [htmlClass()]: true }} component={props.as} {...rest}>
      {props.children}
    </Dynamic>
  );
};
