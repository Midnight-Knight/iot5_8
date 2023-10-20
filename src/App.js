import './App.module.css';
import dataFile from "./json/data.json";
import Style from "./App.module.css";
import {Chart} from './components/chart';
import {Polar} from './components/polar';
import {Line} from './components/line';

function App() {
  const dataVoltage = dataFile.map((elem, index) => {return  {quarter: index, earnings: Number(elem.voltage)}});
  const dataVoltageTime = dataFile.map((elem, index) => {return  {quarter: elem.time, earnings: Number(elem.voltage)}});
  const dataSound = dataFile.map((elem, index) => {return  {quarter: index, earnings: Number(elem.sound)}});
  const dataSoundTime = dataFile.map((elem, index) => {return  {quarter: elem.time, earnings: Number(elem.sound)}});
  const dataConcentration = dataFile.map((elem, index) => {return  {quarter: index, earnings: Number(elem.concentration)}});
  const dataConcentrationTime = dataFile.map((elem, index) => {return  {quarter: elem.time, earnings: Number(elem.concentration)}});


  return (
    <div className={Style.App}>
      <div>
        <h1>Voltage</h1>
        <Chart data={dataVoltageTime} />
        <Polar data={dataVoltage} />
        <Polar data={dataVoltage} bug={true}/>
        <Line data={dataVoltage} />
      </div>
      <div>
        <h1>Sound</h1>
        <Chart data={dataSoundTime} />
        <Polar data={dataSound} />
        <Polar data={dataSound} bug={true}/>
        <Line data={dataSound} />
      </div>
      <div>
        <h1>Concentration</h1>
        <Chart data={dataConcentrationTime} />
        <Polar data={dataConcentration} />
        <Polar data={dataConcentration} bug={true}/>
        <Line data={dataConcentration} />
      </div>
    </div>
  );
}

export default App;
