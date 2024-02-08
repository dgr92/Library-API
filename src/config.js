require('dotenv').config();

const PORT = process.env.PORT || 3000;
const FIREBASE_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

module.exports = { PORT, FIREBASE_CREDENTIALS };
