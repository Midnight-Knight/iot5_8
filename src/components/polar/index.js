import {VictoryBar, VictoryChart, VictoryPie, VictoryPolarAxis} from 'victory';

export function Polar({data, bug = false})
{
  if (!bug)
  {
    const newData = [];
    const min = Math.min.apply( Math, data.map((elem) => elem.earnings));
    const max = Math.max.apply( Math, data.map((elem) => elem.earnings));
    for (let i = 0; i < 5; i++) {
      const range = (min + ((max-min)/5*i)).toFixed(3) + " - " + (min + ((max-min)/5*(i+1))).toFixed(3);
      const jsonData = {x: range, y: 0};
      for (let j = 0; j < data.length; j++)
      {
        if ((min + ((max-min)/5*i) <= data[j].earnings) && (data[j].earnings <= (min + ((max-min)/5*(i+1)))))
        {
          jsonData.y++;
        }
      }
      newData.push(jsonData);
    }

    return (
        <VictoryPie data={newData} />
    );
  }
  else
  {
    return (
        <VictoryChart polar >
          <VictoryPolarAxis tickFormat={data.map((elem, index) => String(index))} />
          <VictoryPolarAxis/>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
    )
  }
}