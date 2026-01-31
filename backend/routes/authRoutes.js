const { register, login, getProfile, completeOnboarding } = require("../controllers/authController.js");
const verifyToken = require('../middleware/authMiddleware.js');
const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", verifyToken, getProfile);
router.put('/complete-onboarding', verifyToken, completeOnboarding);

module.exports = router;