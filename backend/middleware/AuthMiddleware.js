// const jwt = require('jsonwebtoken');

// exports.protect = (req, res, next) => {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ message: 'Unauthorized' });

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) return res.status(401).json({ message: 'Invalid token' });
//         req.user = decoded;
//         next();
//     });
// };

// exports.restrictTo = (...roles) => {
//     return (req, res, next) => {
//         if (!roles.includes(req.user.role)) {
//             return res.status(403).json({ message: 'You do not have permission to perform this action' });
//         }
//         next();
//     };
// };
