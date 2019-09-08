
require('dotenv/config');
const mongosse = require('mongoose');

mongosse.connect(process.env.MONGODB_STRING_CONNECTION, {
    useNewUrlParser: true
});