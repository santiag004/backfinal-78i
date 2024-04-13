import Jwt from "jsonwebtoken";

const comprobacionJwt = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado no es un Admin" });
    }

    try {
        const verifyToken = Jwt.verify(token, process.env.SECRET_KEY)
        req.user = verifyToken
        if (verifyToken.admin) {
            console.log("es admin")
            next()
        } else {
            console.log("no es admin")
            res.status(401).json({ message: "Acceso denegado no es un Admin" })
        }
    } catch (error) {
        console.log(error)
    }
}

export default comprobacionJwt