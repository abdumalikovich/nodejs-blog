const dotenv = require('dotenv');
const path = require('path');
const root = path.join.bind(this, __dirname);

dotenv.config({ path: root('.env') });

module.exports = {
    PORT: 3000,
    MONGOURL: 'mongodb+srv://deved:adwawdawd12@cluster0-ehy1j.mongodb.net/test?retryWrites=true&w=majority',
    IS_PRODUCTION: process.env.NODE_ENV === 'production',
    SESSION_SECRET: "dawouhdoiawjdiwadjwaidohawdiawohdioawhjn",
    DESTINATION: "uploads/"
}