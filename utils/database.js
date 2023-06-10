import mongoose from 'mongoose';

let isConnected = false; // track the connection



export const connectToDB = async () => {
  mongoose.set('strictQuery', true); //if we dont set strictQuery we will get warnings in the console

  //check if we are connected

  if(isConnected) {
    console.log('MongoDB is already connected'); // we return to stope it from running but if its not running we will (try)
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}