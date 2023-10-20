import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

export function Chart({data})
{
  return (
      <VictoryChart height={data.length * 15} >
        <VictoryAxis tickValues={data.map((elem, index) => index)} />
        <VictoryAxis dependentAxis />
        <VictoryBar horizontal labels={({ datum }) => String(datum.earnings)} data={data} x="quarter" y="earnings" />
      </VictoryChart>
  )
}