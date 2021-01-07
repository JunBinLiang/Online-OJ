import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";
import React, { Component, useState } from "react";

class PieChart extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          // used to hide labels
          labelComponent={<span />}
          width={400}
          height={400}
          data={[{ key: "", y: 20 }, { key: "", y: 100 - 20 }]}
          innerRadius={130}
          labelRadius={100}
          colorScale={["#19B3A6", "#EEEEEE"]}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 50 }}
          x={200}
          y={200}
          text="20%"
        />
      </svg>
    );
  }
}

export default PieChart;
