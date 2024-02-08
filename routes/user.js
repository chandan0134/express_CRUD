const express = require('express');
const router = express.Router();
const {handleGetAllUsers,handleGetUserById,handleUpdateUserById, handleDeleteById, handleCreateUserId}= require('../controllers/user')

router.patch("/:id",handleUpdateUserById);
router.delete("/:id",handleDeleteById)
router.get("/:id",handleGetUserById);
router.get("/", handleGetAllUsers);
router.post("/",handleCreateUserId);


// router.get("/users", async(req, res) => {
//     const allUsers= await User.find({});
//     const html = `
//     <ul>
//       ${allUsers.map((User) => `<li>${User.first_name}-${User.email}</li>`).join('')}
//     </ul>
//     `;
//     res.send(html);
// });

module.exports = router;
