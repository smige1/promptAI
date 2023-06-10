import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

//by default all component created within the api folder are react server component
//incase we want to turn the server side into a client side we use"use client'
//whenever we are using useState/useEffect/onClick/onChange/useReducer we change to use client 
//back-end route for auth

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email }); //to make sure to keep a running user we do this
      session.user.id = sessionUser._id.toString(); // is is for updating making sure we know who is online

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        //now we have to create a user but since we dont have any users we need to create one and add it to the database we just connected.
        //to be able to do that we first need to create a model base on which the document of the user will be created
        //that will happen in the model directory, inside we willl create a user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(), // to make sure its in lowercase toLowerCase
            image: profile.picture,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }

// to make sure our server is running constantly we need to connect to the database under our utils
//we will connect our database to the route or hook it