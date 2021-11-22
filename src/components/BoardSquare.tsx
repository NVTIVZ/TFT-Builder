import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const BoardSquare = ({ x }: any) => {
  const [{ isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return x === 7 || x === 21 ? (
    <Hex
      style={{
        marginLeft: '55px',
        backgroundColor: isOver ? 'green' : 'white',
      }}
      ref={drop}
      role={'Dustbin'}
    ></Hex>
  ) : (
    <Hex
      style={{ backgroundColor: isOver ? 'green' : 'white' }}
      ref={drop}
      role={'Dustbin'}
    ></Hex>
  );
};

const Hex = styled.div`
  position: relative;
  width: 100px;
  height: 57.74px;
  margin: 27.87px 2px;
  border-left: solid 3px #333333;
  border-right: solid 3px #333333;
  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 70.71px;
    height: 70.71px;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 12.5px;
  }

  &:before {
    top: -37.3553px;
    border-top: solid 4.2426px #333333;
    border-right: solid 4.2426px #333333;
  }

  &:after {
    bottom: -37.3553px;
    border-bottom: solid 4.2426px #333333;
    border-left: solid 4.2426px #333333;
  }
`;

export default BoardSquare;
