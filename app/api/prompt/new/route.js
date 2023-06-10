import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//here we are going to specify the route type we want to connect to which is the POST method

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json(); // here we want to grab the things we have pass through the post request

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save(); // to save it to the database
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 }); //means server error
    }
}
// this is how an api route looks like