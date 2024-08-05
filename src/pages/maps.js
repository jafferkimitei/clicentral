import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Line, Bar } from 'react-chartjs-2';
import 'mapbox-gl/dist/mapbox-gl.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Load Map dynamically to avoid SSR issues
const Map = dynamic(() => import('react-map-gl'), { ssr: false });

const MapVisualizerPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 8,
    width: '100%',
    height: '500px'
  });

  const climateData = {
    temperature: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Average Temperature (°C)',
          data: [0, 1, 3, 5, 8, 12, 15, 14, 10, 6, 3, 1],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    },
    precipitation: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Precipitation (mm)',
          data: [78, 60, 55, 45, 50, 30, 20, 25, 45, 70, 80, 90],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },
      ],
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Map Visualizer | Clicentral</title>
        <meta name="description" content="Visualize climate trends and data using interactive maps and charts." />
      </Head>

      <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url("../images/donate.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl font-bold">Climate Trends Visualizer</h1>
          <p className="mt-4 text-lg">Explore climate trends through interactive maps and charts.</p>
        </div>
      </section>

      <main className="container mx-auto w-11/12 md:w-10/12 py-10">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Climate Map</h2>
          <div className="rounded-lg shadow-md">
            <Map
              {...viewport}
              mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Temperature Trends</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Line data={climateData.temperature} />
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Precipitation Trends</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={climateData.precipitation} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapVisualizerPage;
