import {VictoryBar, VictoryChart, VictoryPolarAxis} from 'victory';

export function Polar({data})
{
  return (
      <VictoryChart polar >
        <VictoryPolarAxis tickFormat={data.map((elem, index) => String(index))} />
        <VictoryPolarAxis/>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
  )
}