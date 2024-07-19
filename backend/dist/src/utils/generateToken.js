import jwt from 'jsonwebtoken';
const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // milisegundos
        httpOnly: true, // prevent xss cross site scripting
        sameSite: "strict", // csrf attack cross-site request forgery
        secure: process.env.NODE_ENV !== "development" // https.
    });
    return token;
};
export default generateToken;
