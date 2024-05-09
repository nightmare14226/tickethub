// FlightInputForm.tsx
import React, { useState } from 'react';
import { FormData } from './Types';

const FlightInputForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    departureCity: '',
    destinationCity: '',
    departureDate: '',
    returnDate: '',
    passengers: 1
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: typeof prevState[name as keyof FormData] === 'number' ? parseInt(value) : value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="grid md:grid-cols-5 gap-5 bg-white p-5 shadow-md rounded-lg">
        <InputField
          label="From"
          name="departureCity"
          value={formData.departureCity}
          onChange={handleChange}
          placeholder="Departure city"
        />
        <InputField
          label="To"
          name="destinationCity"
          value={formData.destinationCity}
          onChange={handleChange}
          placeholder="Destination city"
        />
        <InputField
          label="When"
          name="departureDate"
          type="date"
          value={formData.departureDate}
          onChange={handleChange}
        />
        <InputField
          label="When"
          name="returnDate"
          type="date"
          value={formData.returnDate}
          onChange={handleChange}
        />
        <SelectField
          label="Passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          options={[1, 2, 3, 4]}
        />
      </div>
    </div>
  );
};

const InputField: React.FC<{
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}> = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);

const SelectField: React.FC<{
  label: string;
  name: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: number[];
}> = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option} passenger{option > 1 ? 's' : ''}
        </option>
      ))}
    </select>
  </div>
);

export default FlightInputForm;