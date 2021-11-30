import styled from 'styled-components';
import BoardSquare from './BoardSquare';
import Item from './Item';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';

const Board = () => {
  // const renderSquare = (i: number) => {
  //   return <BoardSquare key={i} x={i} />;
  // };
  // const squares = [];
  // for (let i = 0; i < 28; i += 1) {
  //   squares.push(renderSquare(i));
  // }

  // console.log(squares);

  // return (
  //   <Container>
  //     <DndContext>
  //       <HexBoard>{squares}</HexBoard>
  //       <Item />
  //     </DndContext>
  //   </Container>
  // );

  const containers = [];
  for (let i = 0; i < 28; i += 1) {
    containers.push(`${i}`);
  }

  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Item id="draggable">
      <img
        src="/images/trundle.jpg"
        alt="trundle"
        style={{ objectFit: 'cover' }}
      />
    </Item>
  );

  console.log(parent);
  return (
    <Container>
      <DndContext onDragEnd={handleDragEnd}>
        <HexBoard>
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <BoardSquare key={id} id={id}>
              {parent === id ? draggableMarkup : ''}
            </BoardSquare>
          ))}
          {parent === null ? draggableMarkup : null}
        </HexBoard>
      </DndContext>
    </Container>
  );
  function handleDragEnd(event: any) {
    const { over } = event;
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};

const HexBoard = styled.div`
  display: flex;
  margin: 0px auto;
  width: 830px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Board;
