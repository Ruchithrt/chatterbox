import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, "N73BF-DBQWHDGQWJWQ1,SDJFSD`~", {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //in ms format , so for 15days 15*24*60*60*1000
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndSetCookie;
