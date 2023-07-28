import React, { ChangeEventHandler } from 'react';



interface SelectInputProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-blue-900 text-sm font-bold mb-1">{label}</label>
      <select
        className="w-full mt-2 text-blue-900 px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option} className='text-gray-700'>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
