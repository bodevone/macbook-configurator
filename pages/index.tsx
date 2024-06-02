import { useState } from 'react';
import Layout from '../components/Layout';
import ConfigOptions from '../components/ConfigOptions';

interface Option {
  id: number;
  label: string;
  performance?: number;
}

interface Config {
  processorFamily: Option | null;
  processorModel: Option | null;
  processorCores: Option | null;
  memory: Option | null;
  storage: Option | null;
  size: Option | null;
}

const Index = () => {
  const [selectedConfig, setSelectedConfig] = useState<Config>({
    processorFamily: null,
    processorModel: null,
    processorCores: null,
    memory: null,
    storage: null,
    size: null,
  });

  const handleSelect = (type: keyof Config, option: Option | null) => {
    setSelectedConfig((prevConfig) => ({
      ...prevConfig,
      [type]: option,
    }));
    console.log(selectedConfig.processorFamily)
  };

  const processorFamilies: Option[] = [
    { id: 1, label: 'M1' },
    { id: 2, label: 'M2' },
    { id: 3, label: 'M3' },
  ];

  const processorModels: Record<string, Option[]> = {
    M1: [
      { id: 1, label: 'M1' },
      { id: 2, label: 'M1 Pro' },
      { id: 3, label: 'M1 Max' },
      { id: 4, label: 'M1 Ultra' },
    ],
    M2: [
      { id: 1, label: 'M2' },
      { id: 2, label: 'M2 Pro' },
      { id: 3, label: 'M2 Max' },
      { id: 4, label: 'M2 Ultra' },
    ],
    M3: [
      { id: 1, label: 'M3' },
      { id: 2, label: 'M3 Pro' },
      { id: 3, label: 'M3 Max' },
    ],
  };

  const processorCores: Record<string, Option[]> = {
    'M1': [
      { id: 1, label: '8 CPU / 7 GPU Cores', performance: 1 },
      { id: 2, label: '8 CPU / 8 GPU Cores', performance: 1.04 },
    ],
    'M1 Pro': [
      { id: 1, label: '8 CPU / 14 GPU Cores', performance: 1.45 },
      { id: 2, label: '10 CPU / 16 GPU Cores', performance: 1.5 },
    ],
    'M1 Max': [
      { id: 1, label: '10 CPU / 24 GPU Cores', performance: 2.7 },
      { id: 2, label: '10 CPU / 32 GPU Cores', performance: 3 },
    ],
    'M1 Ultra': [
      { id: 1, label: '20 CPU / 48 GPU Cores', performance: 4.4 },
      { id: 2, label: '20 CPU / 64 GPU Cores', performance: 5 },
    ],

    'M2': [
      { id: 1, label: '8 CPU / 8 GPU Cores', performance: 1.23 },
      { id: 2, label: '8 CPU / 10 GPU Cores', performance: 1.3 },
    ],
    'M2 Pro': [
      { id: 1, label: '10 CPU / 16 GPU Cores', performance: 2.35 },
      { id: 2, label: '12 CPU / 19 GPU Cores', performance: 2.5 },
    ],
    'M2 Max': [
      { id: 1, label: '12 CPU / 30 GPU Cores', performance: 4.8 },
      { id: 2, label: '12 CPU / 38 GPU Cores', performance: 5 },
    ],
    'M2 Ultra': [
      { id: 1, label: '24 CPU / 60 GPU Cores', performance: 8.6 },
      { id: 2, label: '24 CPU / 60 GPU Cores', performance: 9 },
    ],

    'M3': [
      { id: 1, label: '8 CPU / 8 GPU Cores', performance: 1.6 },
      { id: 2, label: '8 CPU / 10 GPU Cores', performance: 1.7 },
    ],
    'M3 Pro': [
      { id: 1, label: '11 CPU / 14 GPU Cores', performance: 3.1 },
      { id: 2, label: '12 CPU / 18 GPU Cores', performance: 3.5 },
    ],
    'M3 Max': [
      { id: 1, label: '14 CPU / 30 GPU Cores', performance: 7.2 },
      { id: 2, label: '16 CPU / 40 GPU Cores', performance: 7.5 },
    ],
  };

  const memoryOptions: Option[] = [
    { id: 1, label: '8GB', performance: 1 },
    { id: 2, label: '16GB', performance: 1.1 },
    { id: 3, label: '18GB', performance: 1.12 },
    { id: 4, label: '24GB', performance: 1.14 },
    { id: 5, label: '32GB', performance: 1.16 },
    { id: 6, label: '36GB', performance: 1.18 },
    { id: 7, label: '48GB', performance: 1.2 },
    { id: 8, label: '64GB', performance: 1.25 },
    { id: 9, label: '96GB', performance: 1.3 },
    { id: 10, label: '128GB', performance: 1.35 },
    { id: 11, label: '192GB', performance: 1.4 },  
];

  const storageOptions: Option[] = [
    { id: 1, label: '256GB', performance: 1 },
    { id: 2, label: '512GB', performance: 1.1 },
    { id: 3, label: '1TB', performance: 1.2 },
    { id: 4, label: '2TB', performance: 1.2 },
    { id: 5, label: '4TB', performance: 1.2 },
    { id: 6, label: '8TB', performance: 1.2 },
  ];

  const sizeOptions: Option[] = [
    { id: 1, label: '13 inch', performance: 1 },
    { id: 2, label: '14 inch', performance: 1 },
    { id: 3, label: '16 inch', performance: 1.1 },
  ]

  const calculateTotal = () => {
    const processorPerf = selectedConfig.processorCores?.performance || 1;
    const memoryPerf = selectedConfig.memory?.performance || 1;
    const storagePerf = selectedConfig.storage?.performance || 1;
    const sizePerf = selectedConfig.size?.performance || 1;

    return (processorPerf * memoryPerf * storagePerf * sizePerf).toFixed(2);
  };

  return (
    <Layout>
      <h1>Configure your MacBook Pro</h1>
      <h2>Select Processor Family</h2>
      <ConfigOptions
        options={processorFamilies}
        onSelect={(option) => {
          handleSelect('processorFamily', option);
          handleSelect('processorModel', null); // Reset model when family changes
          handleSelect('processorCores', null); // Reset cores when family changes
        }}
        selectedOption={selectedConfig.processorFamily}
      />
      {selectedConfig.processorFamily && (
        <>
          <h2>Select Processor Model</h2>
          <ConfigOptions
            options={processorModels[selectedConfig.processorFamily.label]}
            onSelect={(option) => {
              handleSelect('processorModel', option);
              handleSelect('processorCores', null); // Reset cores when model changes
            }}
            selectedOption={selectedConfig.processorModel}
          />
        </>
      )}
      {selectedConfig.processorModel && (
        <>
          <h2>Select Number of Cores</h2>
          <ConfigOptions
            options={processorCores[selectedConfig.processorModel.label]}
            onSelect={(option) => handleSelect('processorCores', option)}
            selectedOption={selectedConfig.processorCores}
          />
        </>
      )}
      <h2>Select Memory</h2>
      <ConfigOptions
        options={memoryOptions}
        onSelect={(option) => handleSelect('memory', option)}
        selectedOption={selectedConfig.memory}
      />
      <h2>Select Storage</h2>
      <ConfigOptions
        options={storageOptions}
        onSelect={(option) => handleSelect('storage', option)}
        selectedOption={selectedConfig.storage}
      />
      <h2>Select Size</h2>
      <ConfigOptions
        options={sizeOptions}
        onSelect={(option) => handleSelect('size', option)}
        selectedOption={selectedConfig.size}
      />
      <h1 className="total-performance">Total Performance: x{calculateTotal()}</h1>
    </Layout>
  );
};

export default Index;