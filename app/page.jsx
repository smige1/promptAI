import Feed from "@components/Feed";

//this is the first file to create under our app folder
//this will render our home page under the server side

//this is a HTML5 semantic style sheet

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      PromptAI is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed /> 
  </section>
);

export default Home;
//the feed = THIS IS THE NExT COMPoNENT THAT WILL BE CREATED UNDER OUR COMPONENT FOLDER