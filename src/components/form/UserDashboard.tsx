
import React from 'react';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import am4geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const UserDashboard = async () => {
    const session = await getServerSession(authOptions);
    // console.log('session', session?.user)
    if(session?.user){
      return <h2 className="text-2xl">welcome back {session?.user.username}</h2>
    }
  return <h2 className="text-2xl">Please login to see this your page</h2>
}
