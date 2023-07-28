import React, { ChangeEventHandler } from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1">{label}</label>
      <div className="flex">
        {options.map((option) => (
          <label key={option.value} className="flex items-center mr-4">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
