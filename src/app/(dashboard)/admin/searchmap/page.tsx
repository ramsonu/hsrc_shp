import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import AutoSearchMap from "@/components/maps/AutoSearchMap";

const page = async () => {
    const session = await getServerSession(authOptions);
   
    if(session?.user){
        return (
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <br/>
              <br/>
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                
                  <AutoSearchMap />
                
                  
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
