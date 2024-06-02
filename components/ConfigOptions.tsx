import { useState } from 'react';

interface Option {
  id: number;
  label: string;
  performance?: number;
}

interface ConfigOptionsProps {
  options: Option[];
  onSelect: (option: Option) => void;
}

const ConfigOptions = ({ options, onSelect }: ConfigOptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSelect(option)}
          className={selectedOption?.id === option.id ? 'selected' : ''}
        >
          {option.label}
        </button>
      ))}
      <style jsx>{`
        button {
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          background: #f9f9f9;
          cursor: pointer;
          transition: background 0.3s, border-color 0.3s;
        }
        button:hover {
          background: #f1f1f1;
        }
        .selected {
          border-color: #0070f3;
          background: #e6f7ff;
        }
      `}</style>
    </div>
  );
};

export default ConfigOptions;