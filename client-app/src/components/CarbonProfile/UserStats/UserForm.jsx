import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { footPrintURL } from '../../../helpers/ImportantRoutes';

const UserForm = (props) => {
    const {updateReloadState} = props;
    const defaultData = { householdSize: '',
    averageMonthlyElectricityUsage: '',
    numberOfVehicles: '',
    averageAnnualMileagePerVehicle: '',
    averageFuelEfficiencyPerVehicle: '',
    frequentFlyer: false,
    numberOfShortHaulFlights: '',
    numberOfMediumHaulFlights: '',
    numberOfLongHaulFlights: '',
    dietType: 'omnivore',
    estimatedCarbonFootprint: '',};
    const [FootPrintVal, setFootPrintVal] = useState('')
    const [formData, setFormData] = useState(
        defaultData
      );
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'number') {
          if (value < 0) {
            // Prevent negative values
            return;
          }
        }
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const parsedData = {
            householdSize: parseInt(formData.householdSize) || 0,
            averageMonthlyElectricityUsage: parseFloat(formData.averageMonthlyElectricityUsage) || 0,
            numberOfVehicles: parseInt(formData.numberOfVehicles) || 0,
            averageAnnualMileagePerVehicle: parseFloat(formData.averageAnnualMileagePerVehicle) || 0,
            averageFuelEfficiencyPerVehicle: parseFloat(formData.averageFuelEfficiencyPerVehicle) || 0,
            frequentFlyer: formData.frequentFlyer,
            numberOfShortHaulFlights: parseInt(formData.numberOfShortHaulFlights) || 0,
            numberOfMediumHaulFlights: parseInt(formData.numberOfMediumHaulFlights) || 0,
            numberOfLongHaulFlights: parseInt(formData.numberOfLongHaulFlights) || 0,
            dietType: formData.dietType,
          };
        const config = {
          headers: {
            'Authorization': localStorage.getItem("Authorization"),
          },
        };
        try {
          const response = await axios.post(footPrintURL, parsedData, config);
        //   console.log(response.data.estimatedCarbonFootprint);
        setFootPrintVal(response.data.estimatedCarbonFootprint);
        updateReloadState();
        setFormData(defaultData);
        
        } catch (error) {
          console.error('Error submitting data:', error);
        }
      };
    
  return (
    <div className='w-full p-5 h-full bg-purple-200'>
    <div className="max-w-2xl mx-auto p-6 bg-purple-300 shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Carbon Footprint Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Household Size</label>
          <input
          placeholder='(required)'
            type="number"
            name="householdSize"
            value={formData.householdSize}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            min="0"
            step="1" // Remove scroll functionality
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Average Monthly Electricity Usage (kWh)</label>
          <input
            placeholder='(required)'
            type="number"
            name="averageMonthlyElectricityUsage"
            value={formData.averageMonthlyElectricityUsage}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            min="0"
            step="1" // Remove scroll functionality
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Number of Vehicles</label>
          <input
            placeholder='(required)'
            type="number"
            name="numberOfVehicles"
            value={formData.numberOfVehicles}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            min="0"
            step="1" // Remove scroll functionality
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Average Annual Mileage per Vehicle</label>
          <input
          placeholder='(optional)'
            type="number"
            name="averageAnnualMileagePerVehicle"
            value={formData.averageAnnualMileagePerVehicle}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            min="0"
            step="1" // Remove scroll functionality
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Average Fuel Efficiency per Vehicle</label>
          <input
          placeholder='(optional)'
            type="number"
            name="averageFuelEfficiencyPerVehicle"
            value={formData.averageFuelEfficiencyPerVehicle}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            min="0"
            step="1" // Remove scroll functionality
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="frequentFlyer"
            checked={formData.frequentFlyer}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-600">Frequent Flyer</label>
        </div>

        {formData.frequentFlyer && (
          <>
            <div className="flex flex-col">
              <label className="mb-1 text-gray-600">Number of Short-Haul Flights</label>
              <input
              placeholder='(optional)'
                type="number"
                name="numberOfShortHaulFlights"
                value={formData.numberOfShortHaulFlights}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md"
                min="0"
                step="1" // Remove scroll functionality
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-600">Number of Medium-Haul Flights</label>
              <input
              placeholder='(optional)'
                type="number"
                name="numberOfMediumHaulFlights"
                value={formData.numberOfMediumHaulFlights}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md"
                min="0"
                step="1" // Remove scroll functionality
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-gray-600">Number of Long-Haul Flights</label>
              <input
              placeholder='(optional)'
                type="number"
                name="numberOfLongHaulFlights"
                value={formData.numberOfLongHaulFlights}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md"
                min="0"
                step="1" // Remove scroll functionality
              />
            </div>
          </>
        )}

        <div className="flex flex-col">
          <label className="mb-1 text-gray-600">Diet Type</label>
          <select
            name="dietType"
            value={formData.dietType}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="omnivore">Omnivore</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-col mt-4">
        <h1 className="m-2 text-center text-2xl font-bold text-gray-600">Estimated Carbon Footprint (metric tons CO₂)</h1>
        <h3 className='text-center text-gray-500'>{FootPrintVal ? <h1 className='text-4xl text-purple-800 font-bold m-4 p-2'>{FootPrintVal}</h1> : "Fill Form to know your Carbon Footprint"}</h3>
      </div>
    </div>
    </div>
  )
}

export default UserForm
