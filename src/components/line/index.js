import { VictoryLine, VictoryChart,  } from 'victory';

export function Line({data})
{
  const newData = data.map((elem) => {return {x: elem.quarter,y: elem.earnings}})
  return (
      <VictoryChart height={data.length * 15} >
        <VictoryLine
            data={newData}
        />
      </VictoryChart>
  )
}