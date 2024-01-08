import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async() => {
    const session = await getServerSession(authOptions);
    // console.log('session', session?.user)
    if(session?.user){
      return <h2 className="text-2xl">welcome back {session?.user.username}</h2>
    }
  return <h2 className="text-2xl">Please login to see this your page</h2>
}

export default page;
