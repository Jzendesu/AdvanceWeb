import React, { useEffect, useState } from "react";
import axios from "axios";
import { HorizontalBar } from "@reactchartjs/react-chart.js";

const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://6291542a27f4ba1c65caeb73.mockapi.io/vote").then(
      (response) => {
        console.log(response.data);

        setResults(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const totalVotesA = results
    .map((item) => item.partyA)
    .reduce((prev, curr) => prev + curr, 0);

  const totalVotesB = results
    .map((item) => item.partyB)
    .reduce((prev, curr) => prev + curr, 0);


  

  const data = {
    labels: ["Jane", "Drexel",],
    datasets: [
      {
        label: "Number of Votes",
        data: [totalVotesA, totalVotesB, 100],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", 
                         "rgba(255, 99, 132, 0.2)",
                         ],
        borderColor: ["rgba(54, 162, 235, 1)", 
                         "rgba(255, 99, 132, 1)",],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
     <h2>FOR SOURCE PRESIDENT</h2>
      <HorizontalBar data={data} options={options} />
    </>
  );
};

export default Result;
