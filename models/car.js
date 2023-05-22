const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  brand: {
    type: String,
    required: [true, "brand name is required"],
    trim: true,
    text: true,
  },
  model: {
    type: String,
    required: [true, "model name is required"],
    trim: true,
    text: true,
  },
  color: {
    type: String,
    required: [true, "color is required"],
    trim: true,
    text: true,
  },
  chassisNumber: {
    type: Number,
    required: [true, "chassis number is required"],
    trim: true,
  },
  licencePlate: {
    type: String,
    required: [true, "licence plate number is required"],
    trim: true,
    text: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: [Number], // [longitude, latitude]
  },
  state: {
    type: String,
    enum: ["Booked", "Free", "InHub"],
  },
});

module.exports = mongoose.model("Car", carSchema);
