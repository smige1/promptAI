"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
//without the useState function our form will not pass the session
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });


  //when doing a relaod this is to preventthe default behaviour of the browser
  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
// this is calling the api that we are going to pass the session
//doing this we are passing everting during the post inside our api/prompt/new

//now to connect ur api to the backend we nead to create a new file in the app folder called api/prompt/new then a file name called route.js
//just like what we did to the form we will do the same thing all the things we call here which is the (prompt, tag, userId)
//once again we are going to create a models for the prompt and name it PROMPT.JS
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
//using a resuable self closing form page
//to the form we are going to pass a useState function which is submiting, setSubmitting to false
//and a new use state name post and setpost function

//now we will copy all the componet and go to the form component folder/file and past it.
//that is after defining the useState function.
  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
//the type post setPost submitting and handle Submit function are already defined on the create-prompt folder
//so we just need to call them on the form because they are unique functions