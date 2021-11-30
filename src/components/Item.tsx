import { useDraggable } from '@dnd-kit/core';
import styled from 'styled-components';

const Item = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Champion ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </Champion>
  );
};

const Champion = styled.div`
  width: 125px;
  height: 125px;
  z-index: 99;
`;

export default Item;
