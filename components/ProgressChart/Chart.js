import React from 'react';
import PureChart from 'react-native-pure-chart';

import {View} from 'react-native';

const Chart = () => {
  let sampleData = [
    {
      seriesName: 'series1',
      data: [
        {x: '2018-02-01', y: 30},
        {x: '2018-02-02', y: 200},
        {x: '2018-02-03', y: 250},
        {x: '2018-02-04', y: 250},
        {x: '2018-02-05', y: 10},
        {x: '2018-02-06', y: 30},
        {x: '2018-02-07', y: 200},
        {x: '2018-02-08', y: 170},
        {x: '2018-02-09', y: 250},
        {x: '2018-02-10', y: 10},
      ],
      color: '#297AB1',
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2018-02-01', y: 400},
        {x: '2018-02-02', y: 200},
        {x: '2018-02-03', y: 150},
        {x: '2018-02-04', y: 100},
        {x: '2018-02-05', y: 400},
        {x: '2018-02-06', y: 400},
        {x: '2018-02-07', y: 200},
        {x: '2018-02-08', y: 150},
        {x: '2018-02-09', y: 100},
        {x: '2018-02-10', y: 400},
      ],
      color: 'orange',
    },
    {
      seriesName: 'series3',
      data: [
        {x: '2018-02-01', y: 20},
        {x: '2018-02-02', y: 100},
        {x: '2018-02-03', y: 140},
        {x: '2018-02-04', y: 550},
        {x: '2018-02-05', y: 40},
        {x: '2018-02-06', y: 20},
        {x: '2018-02-07', y: 100},
        {x: '2018-02-08', y: 140},
        {x: '2018-02-09', y: 550},
        {x: '2018-02-10', y: 40},
      ],
      color: 'red',
    },
  ];
  return <PureChart data={sampleData} type="line" width={'80%'} height={150} />;
};
export default Chart;
