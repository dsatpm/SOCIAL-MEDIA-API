const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// GET all users, POST new user
router.route('/').get(getAllUsers).post(createUser);

// GET single user, PUT update user, DELETE user
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// POST new friend, DELETE friend
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;