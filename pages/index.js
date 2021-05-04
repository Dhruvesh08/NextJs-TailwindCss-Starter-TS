import React,{useState} from 'react';
import CustomModal from '../components/modal'
export default function Home() {

  const [openmodal, setopenmodal] = useState(false);
  console.log(openmodal);
  return (
    <div className="flex flex-col w-screen h-screen justify-center bg-primary items-center">
      <h1 className="text-3xl font-bold underline inline-block pb-5">
        Welcome to NextJS with Tailwind
      </h1>
      <p className="inline-block">
        Feel Free to edit index.js File
      </p>
      <button
        onClick={() => setopenmodal(!openmodal)}      
        type="button"
        className="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Open Modal
      </button>

      { openmodal && <CustomModal open={openmodal} setOpen={setopenmodal} />}
    </div>
  )
}
