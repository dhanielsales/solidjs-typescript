import { Accessor, createSignal, createEffect } from 'solid-js';

import { CSSProperties, PseudosObject } from './css-properties';

import { createClass } from './create-class';

interface Response {
  htmlClass: Accessor<string>;
}

interface Props {
  styling?: CSSProperties;
  pseudos?: PseudosObject;
}

export function generateClass(props: Props): Response {
  const [htmlClass, setHtmlClass] = createSignal<string>(createClass(props));

  createEffect(() => {
    setHtmlClass(createClass(props));
  });

  return {
    htmlClass,
  };
}
