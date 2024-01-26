import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import LineChart from "@/components/chartsjs/LineChat";
import BarChart from "@/components/chartsjs/barChart";

const page = async () => {
    const session = await getServerSession(authOptions);
    
    if(session?.user){
      return (
        <>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"> */}
                <div className="grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-6">
                    <BarChart />
                    </div>

                    <div className="lg:col-span-6 mt-10 lg:mt-0">
                      <LineChart/>
                    </div>
                </div>
            </div>
            
          {/* </div> */}
        </>
      )
    }
  return <h2 className="text-2xl">Please login to see this your page</h2>
}

export default page;
