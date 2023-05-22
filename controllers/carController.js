const Car = require("../models/car");

exports.addCar = async (req, res) => {
  try {
    const { brand, model, color, chassisNumber, licencePlate } = req.body;

    const found = await Car.findOne({ chassisNumber: chassisNumber });
    if (found) {
      return res.status(400).json({
        message: "Car is alrady in the system",
      });
    }
    const car = await new Car({
      brand,
      model,
      color,
      chassisNumber,
      licencePlate,
    }).save();
    res.send({
      id: car._id,
      brand: car.brand,
      model: car.model,
      color: car.color,
      chassisNumber: car.chassisNumber,
      licencePlate: car.licencePlate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message }); // internal server error
  }
};

exports.bookCar = async (req, res) => {
  try {
    const { idCar } = req.body;
    const bookedCar = await Car.findByIdAndUpdate(idCar, {
      state: "Booked",
    });

    if (!bookedCar) {
      return res.status(404).send({ message: "Car not found" });
    }

    res.send(bookedCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message }); // internal server error
  }
};
