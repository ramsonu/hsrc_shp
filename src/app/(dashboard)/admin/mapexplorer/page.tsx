import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import  SampleMap from "@/components/maps/SampleMap";

const page = async () => {
    const session = await getServerSession(authOptions);
    if(session?.user){
        return (
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                  
                {/*  <div className="lg:col-span-4 mt-10 lg:mt-0">
                        
                        </div>
                      <div className="lg:col-span-4 mt-10 lg:mt-0">
                      <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Image Description" />
                      </div> */}
                    <SampleMap />
                  
              </div>
          </div>
      
        )
      }
    return <h2 className="text-2xl">Please login to see this your page</h2>
}

export default page;
