const mongoose = require('mongoose');

const carbonFootprintSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel', // Assuming you have a User model
        required: true
    },
    householdSize: {
        type: Number,
        required: true
    },
    averageMonthlyElectricityUsage: {
        type: Number, // in kWh
        required: true
    },
    numberOfVehicles: {
        type: Number,
        required: true
    },
    averageAnnualMileagePerVehicle: {
        type: Number, // in miles or kilometers
        default: 0
    },
    averageFuelEfficiencyPerVehicle: {
        type: Number, // in miles per gallon or liters per 100 kilometers
        default: 0
    },
    frequentFlyer: {
        type: Boolean,
        required : true,
    },
    numberOfShortHaulFlights: {
        type: Number,
        default: 0
    },
    numberOfMediumHaulFlights: {
        type: Number,
        default: 0
    },
    numberOfLongHaulFlights: {
        type: Number,
        default: 0
    },
    dietType: {
        type: String,
        enum: ['omnivore', 'vegetarian', 'vegan'],
        required: true
    },
    estimatedCarbonFootprint: {
        type: Number, // in metric tons CO₂
        default: 0
    }
},{
    timestamps : true
});

module.exports = mongoose.model('CarbonFootprint', carbonFootprintSchema);


