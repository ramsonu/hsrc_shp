import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserAccountnav } from './UserAccountnav';

const Navbar = async() => {
  const session = await getServerSession(authOptions);
  const links = [
    {
      id: 1,
      mname: "dashboards",
      link: "/admin/dashboard",
    },
    {
      id: 2,
      mname: "map explorer",
      link: "mapexplorer",
    },
    {
      id: 3,
      mname: "download data",
      link: "downloaddata",
    },
    {
      id: 4,
      mname: "resources",
      link: "resources",
    },
    {
      id: 5,
      mname: "about the project",
      link: "abouttheproject",
    },
  ];

  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <HandMetal />
        </Link>
        <ul className="hidden md:flex">
          {links.map(({ id, mname, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
              <Link href={link}>{mname}</Link>
            </li>
          ))}
        </ul>
        {session?.user ? (<UserAccountnav/>):(
          <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
