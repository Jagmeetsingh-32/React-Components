
        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open && "rotate-45 translate-y-1.5"}`}></span>
          <span className={`h-0.5 w-6 bg-white transition ${open && "opacity-0"}`}></span>
          <span className={`h-0.5 w-6 bg-white transition ${open && "-rotate-45 -translate-y-1.5"}`}></span>

        </button>

        {/* Hamberg button open */}
        {open && (
          <div className="md:hidden mt-12 flex flex-col">
            <a className='text-xl hover:text-blue-600'
              href="#">Home</a>
            <a className='text-xl hover:text-blue-600'
              href="#">PDF Converter</a>
            <a className='text-xl hover:text-blue-600'
              href="#">Graph Builder</a>
          </div>
        )}    
