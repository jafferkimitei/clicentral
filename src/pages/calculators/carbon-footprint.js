import { useState } from 'react';
import Head from 'next/head';

const CarbonFootprintPage = () => {
  const [inputs, setInputs] = useState({
    electricity: '',
    gas: '',
    oil: '',
    carMiles: '',
    busMiles: '',
    flightHours: ''
  });
  const [footprint, setFootprint] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const calculateFootprint = () => {
    const { electricity, gas, oil, carMiles, busMiles, flightHours } = inputs;

    // Example calculations (replace with actual formulas)
    const electricityFootprint = electricity * 0.85;
    const gasFootprint = gas * 2.3;
    const oilFootprint = oil * 2.5;
    const carFootprint = carMiles * 0.79;
    const busFootprint = busMiles * 0.3;
    const flightFootprint = flightHours * 0.54;

    const totalFootprint = electricityFootprint + gasFootprint + oilFootprint + carFootprint + busFootprint + flightFootprint;
    setFootprint(totalFootprint.toFixed(2));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Carbon Footprint Calculator | Clicentral</title>
        <meta name="description" content="Calculate your carbon footprint and understand your impact on the environment." />
      </Head>

      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("../../images/carbon-footprint.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Carbon Footprint Calculator</h1>
          <p className="mt-4 text-lg">Calculate your carbon footprint and understand your impact on the environment.</p>
        </div>
      </section>

      <main className="container mx-auto w-11/12 md:w-10/12 py-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Your Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Electricity Usage (kWh per year)</label>
              <input type="number" name="electricity" value={inputs.electricity} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800" />
            </div>
            <div>
              <label className="block text-gray-700">Gas Usage (therms per year)</label>
              <input type="number" name="gas" value={inputs.gas} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800" />
            </div>
            <div>
              <label className="block text-gray-700">Oil Usage (gallons per year)</label>
              <input type="number" name="oil" value={inputs.oil} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800" />
            </div>
            <div>
              <label className="block text-gray-700">Car Miles Driven per Year</label>
              <input type="number" name="carMiles" value={inputs.carMiles} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800" />
            </div>
            <div>
              <label className="block text-gray-700">Bus Miles Traveled per Year</label>
              <input type="number" name="busMiles" value={inputs.busMiles} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800" />
            </div>
            <div>
              <label className="block text-gray-700">Flight Hours per Year</label>
              <input type="number" name="flightHours" value={inputs.flightHours} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-gray-800" />
            </div>
          </div>
          <button onClick={calculateFootprint} className="w-full bg-primary text-white p-3 rounded-lg mt-4">Calculate Footprint</button>

          {footprint !== null && (
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Your Estimated Carbon Footprint:</h3>
              <p className="text-2xl text-secondary-blue mt-2">{footprint} metric tons CO2 per year</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CarbonFootprintPage;
