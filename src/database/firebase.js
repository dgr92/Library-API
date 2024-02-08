const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const { FIREBASE_CREDENTIALS } = require('../config');

initializeApp({
  credential: applicationDefault(FIREBASE_CREDENTIALS),
});

const db = getFirestore();

module.exports = { db };
