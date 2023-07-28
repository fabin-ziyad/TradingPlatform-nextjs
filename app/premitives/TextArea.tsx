import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  label: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
  required?:boolean
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  rows = 4,
  placeholder = '',
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="textarea" className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <textarea
        id="textarea"
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default TextArea;
