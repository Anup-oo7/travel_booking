import mongoose from "mongoose";

const Traveler_userSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
    },

    verified:{
        type:Boolean,
        default:false,
        required: true

    },
    tripDetails: {
        destination: String,
        startDate: Date,
        endDate: Date,
        destinations: [], // Array of destinations with activities
        
    }
})

const user = mongoose.model('Traveler_signup_user_details',Traveler_userSchema)

export default user;