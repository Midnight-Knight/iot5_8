import './App.module.css';
import dataFile from "./json/data.json";
import Style from "./App.module.css";
import {Chart} from './components/chart';
import {Polar} from './components/polar';
import {Line} from './components/line';

function App() {
  const dataVoltage = dataFile.map((elem, index) => {return  {quarter: index, earnings: Number(elem.voltage)}});
  const dataSound = dataFile.map((elem, index) => {return  {quarter: index, earnings: Number(elem.sound)}});
  const dataConcentration = dataFile.map((elem, index) => {return  {quarter: index, earnings: Number(elem.concentration)}});


  return (
    <div className={Style.App}>
      <div>
        <h1>Voltage</h1>
        <Chart data={dataVoltage} />
        <Polar data={dataVoltage} />
        <Line data={dataVoltage} />
      </div>
      <div>
        <h1>Sound</h1>
        <Chart data={dataSound} />
        <Polar data={dataSound} />
        <Line data={dataSound} />
      </div>
      <div>
        <h1>Concentration</h1>
        <Chart data={dataConcentration} />
        <Polar data={dataConcentration} />
        <Line data={dataConcentration} />
      </div>
    </div>
  );
}

export default App;
