
'use client'
import Map from './components/alerts/page';

import Image from 'next/image'
import CHVPage from './CHVRecords/page'

// import Image from 'next/image'

import ChildRecordsPage from "./childRecords/page";



import React from "react"
import SignUpPage from "./signUp/page"
import SignInPage from "./signIn/page"



export default function Home() {
  return (
<main className='bg-white'>
  <div>

  <Map/>    

    <CHVPage/>

    <ChildRecordsPage/>
    
    
 </div>
</main>
  )
};

