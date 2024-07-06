'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

const bcrypt = require('bcrypt');

//Hash and Compare Passwords Asynchronously
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res);
    });
  });

//Hash and Compare Passwords Synchronously
//END_ASYNC

//START_SYNC
let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
