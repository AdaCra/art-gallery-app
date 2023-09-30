import styled from "styled-components";

const GradientDiv = styled.div`
  background: linear-gradient(
    to right,
    ${({ $colors }) => {
      const colorsCount = $colors.length;
      const span = 100 / (colorsCount * 2);
      const colorStops = $colors.map((color, index) => {
        const start =
          index === 0
            ? 0
            : index === colorsCount - 1
            ? 100 - span
            : index * 2 * span;
        const end =
          index === 0
            ? span
            : index === colorsCount - 1
            ? 100
            : (index * 2 + 1) * span;
        return `${color} ${start}% ${end}%`;
      });
      return colorStops.join(", ");
    }}
  );
  width: 100%;
  height: 50px;
`;

const ColourBox = styled.div`
  margin-top: 10px;
  background-color: ${({ $color }) => $color};
  cursor: help;
  width: 50px;
  height: 50px;
`;
export default function ColourGrid({ array }) {
  return (
    <>
      <h3>Color Palette</h3>
      <GradientDiv $colors={array} />
      <div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {array.map((color, index) => {
            return (
              <ColourBox $color={color} title={color} key={index}></ColourBox>
            );
          })}
        </div>
      </div>
    </>
  );
}
