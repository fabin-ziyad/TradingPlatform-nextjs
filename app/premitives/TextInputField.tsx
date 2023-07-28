import React, { ChangeEventHandler } from 'react';

interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextInputField: React.FC<TextInputProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-500 text-sm font-bold mb-1">{label}</label>
      <input
        type="text"
        className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInputField;
