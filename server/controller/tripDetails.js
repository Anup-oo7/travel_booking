import User from "../model/user.js";

export const newTripDetails = async(req, res)=> {
 
    const { _id } = req.params;
    const tripDetails = req.body 
    
        try {
         
          const user = await User.findById( _id);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
      
      
         
          user.tripDetails= tripDetails;
          
          
          await user.save();
      
          res.status(200).json({ message: 'Trip details saved successfully!' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Server error' });
        }
      
}