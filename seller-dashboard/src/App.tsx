import { useState } from 'react';
import { ResourceSlider } from './components/ResourceSlider';
import { StatCard } from './components/StatCard';
import { UsageGraph } from './components/UsageGraph';
import './index.css';

function App() {
  const [cpuSale, setCpuSale] = useState(50);
  const [memorySale, setMemorySale] = useState(16);
  const [storageSale, setStorageSale] = useState(250);
  const [carbonSale, setCarbonSale] = useState(100);
  const [dataSale, setDataSale] = useState(500);
  const [energySale, setEnergySale] = useState(50);

  // Mock data for usage stats
  const cpuSold = Math.floor(cpuSale * 0.8);
  const memorySold = Math.floor(memorySale * 0.4);
  const storageSold = Math.floor(storageSale * 0.9);
  const carbonSold = Math.floor(carbonSale * 0.6);
  const dataSold = Math.floor(dataSale * 0.75);
  const energySold = Math.floor(energySale * 0.95);

  const earnings = (
    cpuSold * 0.5 + 
    memorySold * 0.2 + 
    storageSold * 0.05 +
    carbonSold * 0.1 +
    dataSold * 0.01 +
    energySold * 0.15
  ).toFixed(2);

  return (
    <main className="dashboard">
      <div style={{ gridColumn: '1 / -1' }}>
        <header className="header">
          <h1>Seller Dashboard</h1>
          <p>Configure and monitor your shared compute resources</p>
        </header>

        <div className="grid-cols-3">
          <StatCard 
            title="Total Earnings" 
            value={`$${earnings}`} 
            subtitle="Estimated for current month" 
          />
          <StatCard 
            title="Active Jobs" 
            value={12} 
            subtitle="Currently running workloads" 
          />
          <StatCard 
            title="Uptime" 
            value="99.8%" 
            subtitle="Over the last 30 days" 
          />
        </div>
      </div>

      <div className="card">
        <h2 className="card-title">Resource Allocation</h2>
        <p className="card-subtitle" style={{ marginBottom: '1.5rem' }}>
          Define the maximum resources you are willing to sell on the network.
        </p>

        <ResourceSlider
          label="CPU Cores"
          value={cpuSale}
          min={1}
          max={100}
          unit="%"
          onChange={setCpuSale}
        />
        
        <ResourceSlider
          label="Memory (RAM)"
          value={memorySale}
          min={2}
          max={64}
          unit="GB"
          onChange={setMemorySale}
        />
        
        <ResourceSlider
          label="Storage"
          value={storageSale}
          min={50}
          max={2000}
          unit="GB"
          onChange={setStorageSale}
        />
        
        <ResourceSlider
          label="Carbon Offsets"
          value={carbonSale}
          min={0}
          max={1000}
          unit="kg"
          onChange={setCarbonSale}
        />
        
        <ResourceSlider
          label="Behavioral Data"
          value={dataSale}
          min={0}
          max={10000}
          unit="MB"
          onChange={setDataSale}
        />
        
        <ResourceSlider
          label="Solar Electricity"
          value={energySale}
          min={0}
          max={500}
          unit="kWh"
          onChange={setEnergySale}
        />
      </div>

      <div className="card">
        <h2 className="card-title">Current Usage</h2>
        <p className="card-subtitle" style={{ marginBottom: '1.5rem' }}>
          Real-time utilization of your allocated resources.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1rem' }}>
          <UsageGraph 
            percentage={(cpuSold / cpuSale) * 100 || 0} 
            label="CPU in Use" 
          />
          <UsageGraph 
            percentage={(memorySold / memorySale) * 100 || 0} 
            label="RAM in Use" 
          />
          <UsageGraph 
            percentage={(storageSold / storageSale) * 100 || 0} 
            label="Storage in Use" 
          />
          <UsageGraph 
            percentage={(carbonSold / carbonSale) * 100 || 0} 
            label="Carbon Sold" 
          />
          <UsageGraph 
            percentage={(dataSold / dataSale) * 100 || 0} 
            label="Data Accessed" 
          />
          <UsageGraph 
            percentage={(energySold / energySale) * 100 || 0} 
            label="Energy Dist." 
          />
        </div>
      </div>
    </main>
  );
}

export default App;
