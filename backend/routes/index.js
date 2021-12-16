const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/locations', controllers.createLocations);

router.post('/places', controllers.createPlaces);

router.post('/reviews', controllers.createReviews);

router.get('/locations', controllers.getAllLocations);

router.get('/places', controllers.getAllPlaces);

router.get('/reviews', controllers.getAllReviews);

router.put('/locations/:_id', controllers.updateLocation);

router.put('/places/:_id', controllers.updatePlace);

router.put('/reviews/:_id', controllers.updateReview);

router.delete('/places/details/:_id', controllers.deletePlace);

router.delete('/reviews/details/:_id', controllers.deleteReview);






module.exports = router;