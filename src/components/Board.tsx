import styled from 'styled-components';
import BoardSquare from './BoardSquare';
import Item from './Item';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Board = () => {
  const renderSquare = (i: number) => {
    return <BoardSquare key={i} x={i} />;
  };
  const squares = [];
  for (let i = 0; i < 28; i += 1) {
    squares.push(renderSquare(i));
  }
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <HexBoard>{squares}</HexBoard>
        <Item />
      </DndProvider>
    </Container>
  );
};

const HexBoard = styled.div`
  display: flex;
  margin: 25px auto;
  width: 830px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Board;
