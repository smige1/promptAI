"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession(); //we want to know is the user is login or not that way we create the section constructor

  const [providers, setProviders] = useState(null); // we want to initialize our set provider function
  const [toggleDropdown, setToggleDropdown] = useState(false);
//how do we set those providers using nextjs, we set a useeffect hook that hass a callback function that only run at the start
  useEffect(() => {
    (async () => {
      const res = await getProviders(); //here we wait to get a response
      setProviders(res);
    })();
  }, []);


  //NAV BAR IS A html5 SEMANTIC STYLE FOR our navbar
  return (
    <footer className='mt-5 text-lg text-gray-600 max-sm:text-sm max-sm:columns-2 max-sm:grid-cols-1 sm:gap-6 grid grid-cols-4 border-t-4 mt-5 mb-6'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>PromptAI</p>
      </Link>
      <div>
          <h4 className='head_text1'>
            Links
            </h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          

        </div>

        <div>
        <h4 className='head_text1'>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>

        </div>

        <div>
        <h4 className='head_text1'>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>+234 8036581503</p>
          <p>egimsikana@gmail.com</p>
        </div>
        
        <div className='col-span-4 place-self-auto justify-center flex-center'>
          <p>© 2023 PromptAI. All rights reserved.</p>
        </div>

        
    </footer>
    
  );
};

export default Footer;


// to make the sing in button oprn up a menu we are going to create a new useState called toggleDropdown