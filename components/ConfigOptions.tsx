import React from 'react';

interface Option {
  id: number;
  label: string;
  performance?: number;
}

interface ConfigOptionsProps {
  options: Option[];
  onSelect: (option: Option | null) => void;
  selectedOption?: Option | null;
}

const ConfigOptions: React.FC<ConfigOptionsProps> = ({ options, onSelect, selectedOption }) => {
  return (
    <div className="config-options">
      {options.map((option) => (
        <button
          key={option.id}
          className={`option-button ${selectedOption && selectedOption.id === option.id ? 'selected' : ''}`}
          onClick={() => onSelect(option)}
        >
          {option.label} {option.performance && <span>(x{option.performance.toFixed(2)})</span>}
        </button>
      ))}
    </div>
  );
};

export default ConfigOptions;