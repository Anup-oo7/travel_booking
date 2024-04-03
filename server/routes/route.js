import express from 'express'
import {signupUser, loginUser, verifyEmail}  from '../controller/user-controller.js';
import { newTripDetails } from '../controller/tripDetails.js';
const router = express.Router()

router.post('/signup', signupUser)
router.post('/emailVerify', verifyEmail)
router.post('/login', loginUser)
router.post('/trips/:_id', newTripDetails)

export default router;