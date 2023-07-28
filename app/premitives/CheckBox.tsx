import React, { ChangeEventHandler } from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
        checked={checked}
        onChange={onChange}
      />
      <label className="ml-2 block text-gray-700 text-sm">{label}</label>
    </div>
  );
};

export default Checkbox;
