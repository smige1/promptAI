import "@styles/globals.css";

//this is the second important file the second file to create for our nextjs

// layout is the main file to display , any component you create will be share through out
//we are going to past any file we want to repeat on the display
//the popose of the layout component is for allowing of the sharing within files

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from '@components/Footer';


//THIS IS THE NEXT FILE TO BE GENERATED AND ITS A REUSABLE COMPONENT THE WE WANT TO USE IN ALL OUR PAGES
export const metadata = {
  title: "PromptAI",
  description: "Discover & Share AI Prompts",
};


// geting the children from props
//this will just chage the background color(gradient)
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' /> 
        </div>

        <main className='app'>
          <Nav /> 
          {children}
          <Footer />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;

//this are all the children we want to display (the main component)