import { Schema, model, models } from 'mongoose';


        // if not, create a new document and save user in MongoDB
        //now we have to create a user but since we dont have any users we need to create one and add it to the database we just connected.
        //to be able to do that we first need to create a model base on which the document of the user will be created
        //that will happen in the model directory, inside we willl create a user
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
  },
  image: {
    type: String,
  }
});
// since we are working on a express backend we do this
const User = models.User || model("User", UserSchema);

export default User;