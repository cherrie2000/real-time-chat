import User from '../models/user.model.js';

export const getUsersForSidebar=async(req,res)=>{
    try{
        const logged_user = req.user._id;
        const user = await User.find({_id:{$ne:logged_user}}).select("-password");

        res.status(200).json(user);
    }
    catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}