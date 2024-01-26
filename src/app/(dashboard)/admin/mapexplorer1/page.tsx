import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import MultiPoints from "@/components/maps/MultiPoints";
import { promises as fs } from 'fs';


const page = async () => {
    const session = await getServerSession(authOptions);
   
    if(session?.user){
        return (
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <br/>
              <br/>
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:col-span-2 mt-10 lg:mt-0">
                  <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"></h1>
                  <p className="mt-3 text-lg text-gray-800 dark:text-gray-400"></p>

                  <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                      <div className="w-full sm:w-auto">
                      <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Location" />
                      </div>
                      <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      Search
                      </a>
                  </div>
                </div>
                <div className="lg:col-span-6 mt-10 lg:mt-0">
                  <MultiPoints />
                </div>
                  
              </div>
          </div>
      
        )
      }
    return <h2 className="text-2xl">Please login to see this your page</h2>
}

// Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), 'data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }

export default page;
