const express = require('express')
const footPrintSchema = require('../models/footPrintModel')

const calculateCarbonFootprint = (data) => {
    // Constants (these can be adjusted based on more precise data)
    const electricityEmissionFactor = 0.0005; // metric tons CO₂ per kWh
    const vehicleEmissionFactorMile = 0.0089; // metric tons CO₂ per mile
    const vehicleEmissionFactorKm = 0.0056;  // metric tons CO₂ per km
    const shortHaulFlightEmission = 0.2; // metric tons CO₂ per flight
    const mediumHaulFlightEmission = 0.5; // metric tons CO₂ per flight
    const longHaulFlightEmission = 1.1; // metric tons CO₂ per flight
    const dietEmission = {
        omnivore: 1.0, // metric tons CO₂ per year
        vegetarian: 0.5,
        vegan: 0.3
    };

    // Ensure values are numbers and provide defaults if not available
    const averageMonthlyElectricityUsage = Number(data.averageMonthlyElectricityUsage) || 0;
    const numberOfVehicles = Number(data.numberOfVehicles) || 0;
    const averageAnnualMileagePerVehicle = Number(data.averageAnnualMileagePerVehicle) || 0;
    const averageFuelEfficiencyPerVehicle = Number(data.averageFuelEfficiencyPerVehicle) || 0;
    const numberOfShortHaulFlights = Number(data.numberOfShortHaulFlights) || 0;
    const numberOfMediumHaulFlights = Number(data.numberOfMediumHaulFlights) || 0;
    const numberOfLongHaulFlights = Number(data.numberOfLongHaulFlights) || 0;
    const dietType = data.dietType;

    // Calculate emissions
    const electricityEmissions = averageMonthlyElectricityUsage * 12 * electricityEmissionFactor;

    // Choose the emission factor based on whether averageFuelEfficiencyPerVehicle is provided
    const vehicleEmissionFactor = averageFuelEfficiencyPerVehicle > 0 ? vehicleEmissionFactorMile : vehicleEmissionFactorKm;
    const vehicleEmissions = numberOfVehicles * averageAnnualMileagePerVehicle * vehicleEmissionFactor;

    const flightEmissions = (numberOfShortHaulFlights * shortHaulFlightEmission) +
                             (numberOfMediumHaulFlights * mediumHaulFlightEmission) +
                             (numberOfLongHaulFlights * longHaulFlightEmission);

    const dietEmissions = dietEmission[dietType] || 0;

    // Total emissions
    const totalEmissions = electricityEmissions + vehicleEmissions + flightEmissions + dietEmissions;

    return isNaN(totalEmissions) ? 0 : totalEmissions; // Ensure a number is returned
};

const postData = async (req, res) => {
    try {
        const data = req.body;
        // console.log("The data of body is  : ", data);
        if(!data.householdSize || !data.averageMonthlyElectricityUsage || !data.numberOfVehicles || !data.dietType)
        {
            res.status(404).send({message : "Please provide mandatory credentials"});
        }
        else 
        {
            const estimatedFootprint = calculateCarbonFootprint(data);
            const createFootPrint = await footPrintSchema.create({
                user_id: req.user.id, estimatedCarbonFootprint : estimatedFootprint, ...data
            })
            res.status(200).send(createFootPrint);
        }
    } catch (error) {
        res.status(500).send({message : "Internal Server Error"})
    }
}
const getData = async (req, res) => {
    try {
        const getUserData = await footPrintSchema.find({user_id : req.user.id});
        res.status(200).send(getUserData)
    } catch (error) {
        res.status(500).send({message : "Internal Server Error"})
    }
}

module.exports = {postData, getData}