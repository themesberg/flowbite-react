import { ReactNode } from 'react';

export default function childrenAsArray(children: ReactNode): ReactNode[] {
  if (Array.isArray(children)) {
    return children;
  } else if (typeof children !== 'undefined') {
    return [children];
  } else {
    return [];
  }
}
