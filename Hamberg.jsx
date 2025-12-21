import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='relative px-8 h-16 w-full flex justify-between items-center bg-amber-200'>
        <div className='flex items-center gap-20'>
          {/* Logo */}
          <div className='text-xl font-bold'>Logo</div>

          <div className="hidden md:flex items-center  justify-between gap-8">
            {/* Home */}
            <a className='text-xl hover:text-blue-600'
              href="#">Home</a>

            {/*  links */}
            <a className='text-xl  hover:text-blue-600'
              href="#">PDF Converter</a>
            <a className='text-xl hover:text-blue-600'
              href="#">Graph Builder</a>

            {/* Login */}
        <button className='text-xl  bg-amber-50 hover:bg-blue-500'>
          Login
        </button>

          </div>
        </div>

        

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden "
        >
          <span className={`h-0.5 w-6 bg-white transition ${open && "rotate-45 translate-y-1.5"}`}></span>
          <span className={`h-0.5 w-6 bg-white transition ${open && "opacity-0"}`}></span>
          <span className={`h-0.5 w-6 bg-white transition ${open && "-rotate-45 -translate-y-1.5"}`}></span>

        </button>

        {/* Hamberg button open */}
        {open && (
          <div className="absolute left-0 top-full w-full md:hidden flex flex-col
            bg-amber-200 py-4 gap-4 shadow-md">
            <a className='text-xl hover:text-blue-600'
              href="#">Home</a>
            <a className='text-xl hover:text-blue-600'
              href="#">PDF Converter</a>
            <a className='text-xl hover:text-blue-600'
              href="#">Graph Builder</a>
          </div>
        )}


      </nav>

    </>
  );
}
