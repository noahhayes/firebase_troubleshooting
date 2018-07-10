const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = functions.database
  .ref(`/hello`)
  .onCreate(() => {
    console.log('Hello World');
  });
