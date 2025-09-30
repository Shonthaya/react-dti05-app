import { Link } from 'react-router-dom'

export default function NavBar({hc, ac, cc, pc}) {
  return (
   <>
   <div className='flex justify-around items-center bg-black text-white py-4'>
    <h1 className='text-3xl font-bold'>Shonthaya Saiwanna</h1>
    <Link style={hc} to="/" className='border-amber-50 py-2 px-4 rounded-3xl border-2' >Home</Link> |
    <Link style={ac} to="/about" className='border-amber-50 py-2 px-4 rounded-3xl border-2' >About</Link> |
    <Link style={cc} to="/contact" className='border-amber-50 py-2 px-4 rounded-3xl border-2' >Let Talk</Link> |
    <Link style={pc} to="/portfolio" className='border-amber-50 py-2 px-4 rounded-3xl border-2' >Portfolio</Link>
   </div>
   </>
  );
}
