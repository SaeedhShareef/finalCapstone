import dotenv from 'dotenv';

dotenv.config();
export const BACKEND_URL= process.env.NODE_ENV === 'development'?"http://localhost:5000/": "https://updatedtravels.herokuapp.com/"
// comment out this file and procfile and your imports for the config file if it doesn't build after this
//this one works ignore top comment