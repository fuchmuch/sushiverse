const Location = require('../models/location');
const place = require('../models/place');
const Place = require('../models/place');
const Review = require('../models/review');


const createLocations = async (req, res) => {
    try {
      const location = await new Location(req.body);
      await location.save();
      return res.status(201).json({
        location
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const createPlaces = async (req, res) => {
    try {
      const place = await new Place(req.body);
      await place.save();
      return res.status(201).json({
        place
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const createReviews = async (req, res) => {
    try {
      const review = await new Review(req.body);
      await review.save();
      return res.status(201).json({
        review
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const getAllLocations = async (req, res) => {
    try {
      const locations = await Location.find();
      return res.status(200).json({locations });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getAllPlaces = async (req, res) => {
    try {
      const places = await Place.find().populate('location');

      return res.status(200).json({places});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getAllReviews = async (req, res) => {
    try {
      const reviews = await Review.find().populate('place');
      return res.status(200).json({ reviews });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


  const getLocationById = async (req, res) => {
    try {
      const { _id } = req.params;
      const review = await Review.findById(_id);
      if (review) {
        return res.status(200).json({ review });
      }
      return res.status(404).send(`Location with the specified ID does not exists`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getPlaceById = async (req, res) => {
    try {
      const { _id } = req.params;
      const review = await Review.findById(_id);
      if (review) {
        return res.status(200).json({ review });
      }
      return res.status(404).send(`Place with the specified ID does not exists`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getReviewById = async (req, res) => {
    try {
      const { _id } = req.params;
      const review = await Review.findById(_id);
      if (review) {
        return res.status(200).json({ review });
      }
      return res.status(404).send(`Review with the specified ID does not exists`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const deleteLocation = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleted = await Ride.findByIdAndDelete(_id)
        if (deleted) {
            return res.status(200).send("Location deleted");
        }
        throw new Error("Location not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
  };

  const updateLocation = async (req, res) => {
    try {
        const { _id } = req.params;
        await Location.findByIdAndUpdate( _id, req.body, { new: true }, (err, location) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!location) {
                res.status(500).send('Location not found!');
            }
            return res.status(200).json(location);
        }).clone().catch(err=> res.send(err))
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updatePlace = async (req, res) => {
    try {
        const { _id } = req.params;
        await Location.findByIdAndUpdate( _id, req.body, { new: true }, (err, place) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!place) {
                res.status(500).send('Place not found!');
            }
            return res.status(200).json(place);
        }).clone().catch(err=> res.send(err))
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateReview = async (req, res) => {
    try {
        const { _id } = req.params;
        await Location.findByIdAndUpdate( _id, req.body, { new: true }, (err, review) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!review) {
                res.status(500).send('Review not found!');
            }
            return res.status(200).json(review);
        }).clone().catch(err=> res.send(err))
    } catch (error) {
        return res.status(500).send(error.message);
    }
};



  const deletePlace = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleted = await Ride.findByIdAndDelete(_id)
        if (deleted) {
            return res.status(200).send("Place deleted");
        }
        throw new Error("Place not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
  };

  const deleteReview = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleted = await Review.findByIdAndDelete(_id)
        if (deleted) {
            return res.status(200).send("Review deleted");
        }
        throw new Error("Review not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }
  



  module.exports = {
    createLocations,
    createReviews,
    createPlaces,
    getAllLocations,
    getAllPlaces,
    getAllReviews,
    getLocationById,
    getPlaceById,
    getReviewById,
    updateLocation,
    updatePlace,
    updateReview,
    deleteLocation,
    deletePlace,
    deleteReview
//update required

    
  };