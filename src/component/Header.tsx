

export default function Header() {
  return (
    <header className=' bg-amber-900'>
      <div className=' container mx-auto flex justify-between items-center py-4'>
      <div>
        <a className=' text-slate-100 text-xl font-bold' href="">My logo</a>
      </div>
      <nav>
        <ul className='flex space-x-4'>
          <li><a href="" className=' text-slate-50 hover:text-slate-100'>Home</a></li>
          <li><a href="" className=' text-slate-50 hover:text-slate-100'>About</a></li>
          <li><a href="" className=' text-slate-50 hover:text-slate-100' >Product</a></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

