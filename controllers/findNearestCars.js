const Car = require("../models/car");

exports.findNearestCars = async (req, res) => {
  try {
    const longitude = parseFloat(req.query.longitude);
    const latitude = parseFloat(req.query.latitude);
    const rangeInKm = 2;
    console.log(longitude);
    console.log(latitude);

    const nearestCars = await findCarsWithinRange(
      longitude,
      latitude,
      rangeInKm
    );

    if (!nearestCars) {
      res.status(400).send({ message: "couldn't find near cars" });
    }
    res.send(nearestCars);
  } catch (error) {
    res.status(500).json({ message: error.message }); //internel server error
  }
};

async function findCarsWithinRange(longitude, latitude, rangeInKm) {
  const rangeInMeters = rangeInKm * 1000;
  const query = {
    location: {
      $nearSphere: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        $maxDistance: rangeInMeters,
      },
    },
    state: "Free",
  };

  const cars = await Car.find(query);
  return cars;
}
