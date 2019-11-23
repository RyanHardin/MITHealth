import React from 'react';
import PureChart from 'react-native-pure-chart';

import {View} from 'react-native';

const Chart = () => {
  let sampleData = [
    {
      seriesName: 'series1',
      data: [
        {x: '2018-02-01', y: Math.round(Math.random() * 10)},
        {x: '2018-02-02', y: Math.round(Math.random() * 10)},
        {x: '2018-02-03', y: Math.round(Math.random() * 10)},
        {x: '2018-02-04', y: Math.round(Math.random() * 100)},
        {x: '2018-02-05', y: Math.round(Math.random() * 100)},
        {x: '2018-02-06', y: Math.round(Math.random() * 100)},
        {x: '2018-02-07', y: Math.round(Math.random() * 100)},
        {x: '2018-02-08', y: Math.round(Math.random() * 100)},
        {x: '2018-02-09', y: Math.round(Math.random() * 100)},
        {x: '2018-02-10', y: Math.round(Math.random() * 100)},
      ],
      color: '#297AB1',
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2018-02-01', y: Math.round(Math.random() * 100)},
        {x: '2018-02-02', y: Math.round(Math.random() * 100)},
        {x: '2018-02-03', y: Math.round(Math.random() * 100)},
        {x: '2018-02-04', y: Math.round(Math.random() * 100)},
        {x: '2018-02-05', y: Math.round(Math.random() * 100)},
        {x: '2018-02-06', y: Math.round(Math.random() * 100)},
        {x: '2018-02-07', y: Math.round(Math.random() * 100)},
        {x: '2018-02-08', y: Math.round(Math.random() * 100)},
        {x: '2018-02-09', y: Math.round(Math.random() * 100)},
        {x: '2018-02-10', y: Math.round(Math.random() * 100)},
      ],
      color: 'orange',
    },
    {
      seriesName: 'series3',
      data: [
        {x: '2018-02-01', y: Math.round(Math.random() * 100)},
        {x: '2018-02-02', y: Math.round(Math.random() * 100)},
        {x: '2018-02-03', y: Math.round(Math.random() * 100)},
        {x: '2018-02-04', y: Math.round(Math.random() * 100)},
        {x: '2018-02-05', y: Math.round(Math.random() * 100)},
        {x: '2018-02-06', y: Math.round(Math.random() * 100)},
        {x: '2018-02-07', y: Math.round(Math.random() * 100)},
        {x: '2018-02-08', y: Math.round(Math.random() * 100)},
        {x: '2018-02-09', y: Math.round(Math.random() * 100)},
        {x: '2018-02-10', y: Math.round(Math.random() * 100)},
      ],
      color: 'red',
    },
  ];
  return <PureChart data={sampleData} type="line" width={'80%'} height={150} />;
};
export default Chart;
