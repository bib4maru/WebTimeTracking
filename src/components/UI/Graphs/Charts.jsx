import React from 'react';
import { PieChart, Pie, Cell, Tooltip,LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend } from "recharts";

const data1 = [
    { name: "Полезное время", value: 7 },
    { name: "Бесполезное время", value: 1 },
  ];

// const data2 = [
//   {
//     name: "05/07/2023",
//     useless: 1,
//     useful: 7,
//   },
//   {
//     name: "05/08/2023",
//     useless: 0.5,
//     useful: 7.5,
//   },
//   {
//     name: "05/09/2023",
//     useless: 3,
//     useful: 5,
//   },
//   {
//     name: "05/10/2023",
//     useless: 7,
//     useful: 1,
//   }
//   ]

  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  const COLORS = ["green", "red"];

const Charts = () => {
    return (
        <div className='charts__container'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data1}
                    cx={200}
                    cy={200}
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip/>
            </PieChart>
            <LineChart
            width={500}
            height={300}
            data={data2}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="uv"
                stroke="red"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="pv" stroke="green" />
            </LineChart>
        </div>
);
}

export default Charts;