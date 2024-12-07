import Link from "next/link"


const NavBar = () => {
  return (
      <nav className=" px-6 py-4 bg-slate-50 text-gray-950 flex items-center justify-between " >
           <h1 className=" text-3xl" >Logo</h1>
           <ul className=" uppercase flex gap-6 " >
            <Link href={'/'} ><l className="" ></l>Home</Link>
            <Link href={'/about'} ><l className="" >About</l></Link>
            <Link href={'/dashboard'} ><l className="" >DashBoard</l></Link>
            <Link href={'/blogpost'} ><l className="" >Blogpost</l></Link>
            <Link href={'/contact'} ><l className="" >Blogpost</l></Link>
           </ul>
      </nav>
  )
}

export default NavBar