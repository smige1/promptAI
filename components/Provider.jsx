'use client';

import { SessionProvider } from "next-auth/react";


// this is the forth file we will create as a provider for the children, and this provider can be use / reuse anywhere in the app adding it to our layout file
const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;
