import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Shoes",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Shirts",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Food",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Gadgets",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Cars",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Health",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Books",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class BarChartNew extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <div className="question">
        <div className="question-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#FFF" />
              <YAxis stroke="#FFF" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
