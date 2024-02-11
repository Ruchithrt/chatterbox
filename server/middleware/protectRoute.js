import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const protectRoute = async (req, res, next) => {
  try {

    //requestin jwt from cookie
    const token = req.cookie.jwt;
    if(!token){
       return  res.status(401).json({error:"Unathourised - No Token Provided"})
    }

    //decode the logic using secret key
    const decode = jwt.verify(token,"N73BF-DBQWHDGQWJWQ1,SDJFSD`~")
    if(!decode){
        return  res.status(401).json({error:"Unathourised - Invalid token"})
    }

    const user = await User.findById(decode.userId).select("-password")

  } catch (error) {
    console.log("Error in logout controller : ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
