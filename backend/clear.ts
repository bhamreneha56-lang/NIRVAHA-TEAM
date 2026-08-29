import mongoose from 'mongoose';
async function clearDB() {
  await mongoose.connect('mongodb://localhost:27017/nirvaha');
  await mongoose.connection.db.dropDatabase();
  console.log("Database cleared.");
  process.exit(0);
}
clearDB();
