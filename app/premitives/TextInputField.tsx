import React, { ChangeEventHandler } from 'react';

interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?:boolean
}

const TextInputField: React.FC<TextInputProps> = ({ label, placeholder,required, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-blue-900 text-sm font-bold mb-1">{label} {required ? "*":""}</label>
      <input
        type="text"
        className="w-full text-blue-900 px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInputField;
