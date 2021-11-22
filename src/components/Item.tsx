import styled from 'styled-components';
import { DragSourceMonitor, useDrag } from 'react-dnd';

const Item = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BOX',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <Champion ref={drag} style={{ opacity }}>
      <img src="images/Trundle.jpg" width="125px" alt="trundle" />
    </Champion>
  );
};

const Champion = styled.div`
  width: 125px;
  height: 125px;
`;

export default Item;
