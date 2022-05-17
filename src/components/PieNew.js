import React, { PureComponent } from "react";
import { Box, Box2Fill } from "react-bootstrap-icons";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Adult Male", value: 400 },
  { name: "Adult Female", value: 300 },
  { name: "Young Female", value: 300 },
  { name: "Young Male", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieNew extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <div className="bg-black d-flex  align-items-center flex-wrap">
        <div className="question-2">
          <div className="question-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={328}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <Box2Fill className="" size={20} color="#0088FE" />
            <p className="text-white py-1 mt-2 px-3">Adult Male</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Box2Fill className="" size={20} color="#00C49F" />
            <p className="text-white py-1 mt-2 px-3">Adult Female</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Box2Fill className="" size={20} color="#FFBB28" />
            <p className="text-white py-1 mt-2 px-3">Young Female</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Box2Fill className="" size={20} color="#FF8042" />
            <p className="text-white py-1 mt-2 px-3">Young Male</p>
          </div>
        </div>
      </div>
    );
  }
}
