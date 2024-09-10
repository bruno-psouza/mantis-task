// test-env.js
require('dotenv').config();

console.log('Username:', process.env.CYPRESS_USERNAME);
console.log('Password:', process.env.CYPRESS_PASSWORD);

