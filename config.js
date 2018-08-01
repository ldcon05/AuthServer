const port = process.env.PORT || 3000;
const db = 'mongodb://root:admin123@ds263791.mlab.com:63791/dbauth';
const bcryptSaltRounds = 10;
const JWT_TOKEN_SECRET = 'secreto';


export {port, db, bcryptSaltRounds, JWT_TOKEN_SECRET};
