import styled from 'styled-components';
import BoardSquare from './BoardSquare';

const Board = () => {
  const renderSquare = (i: number) => {
    return <BoardSquare key={i} x={i} />;
  };
  const squares = [];
  for (let i = 0; i < 28; i += 1) {
    squares.push(renderSquare(i));
  }
  return <HexBoard>{squares}</HexBoard>;
};

const HexBoard = styled.div`
  display: flex;
  width: 830px;
  flex-wrap: wrap;
`;

export default Board;
