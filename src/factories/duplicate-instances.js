import {cloneElement} from 'react';

export default function duplicateInstances (element, children) {
  return children.map((child, index) => {
    child.key = child.id || index;
    return cloneElement(element, child);
  });
}
