const router = require('express').Router();

// import all controller functions
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// GET all thoughts, POST new thought
router.route('/').get(getAllThoughts).post(createThought);

// GET single thought, PUT update thought, DELETE thought
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// POST new reaction
router.route('/:thoughtId/reactions')
.post(createReaction);

// DELETE reaction
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


module.exports = router;