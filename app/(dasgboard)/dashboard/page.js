import Link from "next/link"

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[100vh] " >
        <div className=" flex gap-5 m-5 " >
            <Link href={'/dashboard/user'} ><button className=" border border-gray-200 rounded-md px-4 py-2  " > User </button></Link>
            
            <Link href={'/dashboard/admin'} ><button className="border border-gray-200 rounded-md px-4 py-2 " > Admin </button></Link>
        </div>
    </section>
  )
}

export default page