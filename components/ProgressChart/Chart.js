import React from 'react';
import PureChart from 'react-native-pure-chart';

import {View} from 'react-native';

const Chart = () => {
  let sampleData = [
    {
      seriesName: 'series1',
      data: [
        {x: '2019-11-01', y: Math.round(Math.random() * 100)},
        {x: '2019-11-03', y: Math.round(Math.random() * 100)},
        {x: '2019-11-06', y: Math.round(Math.random() * 100)},
        {x: '2019-11-07', y: Math.round(Math.random() * 100)},
        {x: '2019-11-08', y: Math.round(Math.random() * 100)},
        {x: '2019-11-12', y: Math.round(Math.random() * 100)},
        {x: '2019-11-15', y: Math.round(Math.random() * 100)},
        {x: '2019-11-16', y: Math.round(Math.random() * 100)},
        {x: '2019-11-20', y: Math.round(Math.random() * 100)},
        {x: '2019-11-25', y: Math.round(Math.random() * 100)},
      ],
      color: '#297AB1',
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2019-11-01', y: Math.round(Math.random() * 100)},
        {x: '2019-11-03', y: Math.round(Math.random() * 100)},
        {x: '2019-11-06', y: Math.round(Math.random() * 100)},
        {x: '2019-11-07', y: Math.round(Math.random() * 100)},
        {x: '2019-11-08', y: Math.round(Math.random() * 100)},
        {x: '2019-11-12', y: Math.round(Math.random() * 100)},
        {x: '2019-11-15', y: Math.round(Math.random() * 100)},
        {x: '2019-11-16', y: Math.round(Math.random() * 100)},
        {x: '2019-11-20', y: Math.round(Math.random() * 100)},
        {x: '2019-11-25', y: Math.round(Math.random() * 100)},
      ],
      color: 'orange',
    },
    {
      seriesName: 'series3',
      data: [
        {x: '2019-11-01', y: Math.round(Math.random() * 100)},
        {x: '2019-11-03', y: Math.round(Math.random() * 100)},
        {x: '2019-11-06', y: Math.round(Math.random() * 100)},
        {x: '2019-11-07', y: Math.round(Math.random() * 100)},
        {x: '2019-11-08', y: Math.round(Math.random() * 100)},
        {x: '2019-11-12', y: Math.round(Math.random() * 100)},
        {x: '2019-11-15', y: Math.round(Math.random() * 100)},
        {x: '2019-11-16', y: Math.round(Math.random() * 100)},
        {x: '2019-11-20', y: Math.round(Math.random() * 100)},
        {x: '2019-11-25', y: Math.round(Math.random() * 100)},
      ],
      color: 'red',
    },
  ];
  return <PureChart data={sampleData} type="line" width={'80%'} height={150} />;
};
export default Chart;
