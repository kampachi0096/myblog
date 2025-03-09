import Link from 'next/link';


const roots = [
  { id: 1, url: "/", name: "root", color: "text-black"},
  { id: 2, url: "/home", name: "home", color: "text-black"},
  { id: 3, url: "/contact", name: "contact", color: "text-black"},
  { id: 4, url: "/button", name: "button", color: "text-black"}
];

export default function TopBar() {
  return (
    <nav className="text-center py-4 w-full mt-auto max-w-[1000px] mx-auto  bg-white p-6 border border-gray-200 shadow-xl">
      <ul className="flex space-x-4">
        {
          roots.map((root) => (
            <li key={root.id}>
              <Link href={root.url} className="text-lg text-black hover:text-emerald-500 transition-all duration-300">
                {root.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>

    /*<div className="text-center bg-white">
      
      {
        roots.map((root) => {
          return(
            <Link className={`${root.color} px-3`} href={root.url} key={root.id}>{root.name}</Link>
          )
        })
      }
      
    </div>
    */
  );
}