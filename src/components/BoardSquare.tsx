import styled from 'styled-components';

const BoardSquare = ({ x }: any) => {
  return x === 7 || x === 21 ? (
    <Hex style={{ marginLeft: '55px' }}></Hex>
  ) : (
    <Hex></Hex>
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
    left: 12.6447px;
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
