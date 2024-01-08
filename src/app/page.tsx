"use client";
import { User } from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5-geodata";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
      })
    );

    chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xdadada)
    });

    let pointSeries = chart.series.push(am5map.ClusteredPointSeries.new(root, {}));

    pointSeries.set("clusteredBullet", function (root) {
      let container = am5.Container.new(root, {
        cursorOverStyle: "pointer"
      });

      let circle1 = container.children.push(am5.Circle.new(root, {
        radius: 8,
        tooltipY: 0,
        fill: am5.color(0xff8c00)
      }));

      let circle2 = container.children.push(am5.Circle.new(root, {
        radius: 12,
        fillOpacity: 0.3,
        tooltipY: 0,
        fill: am5.color(0xff8c00)
      }));

      let circle3 = container.children.push(am5.Circle.new(root, {
        radius: 16,
        fillOpacity: 0.3,
        tooltipY: 0,
        fill: am5.color(0xff8c00)
      }));

      let label = container.children.push(am5.Label.new(root, {
        centerX: am5.p50,
        centerY: am5.p50,
        fill: am5.color(0xffffff),
        populateText: true,
        fontSize: "8",
        text: "{value}"
      }));

      container.events.on("click", function (e) {
        pointSeries.zoomToCluster(e.target.dataItem);
      });

      return am5.Bullet.new(root, {
        sprite: container
      });
    });

    pointSeries.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 6,
        tooltipY: 0,
        fill: am5.color(0xff8c00),
        tooltipText: "{title}"
      });

      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    let cities = [
      // Your city data here
    ];

    for (var i = 0; i < cities.length; i++) {
      let city = cities[i];
      addCity(city.longitude, city.latitude, city.title);
    }

    function addCity(longitude, latitude, title) {
      pointSeries.data.push({
        geometry: { type: "Point", coordinates: [longitude, latitude] },
        title: title
      });
    }

    chart.appear(1000, 100);

    // Cleanup function
    return () => {
      root.dispose();
    };
  }, []);
   return (<>
      
      <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
    {/* <h1 className='text-4xl'>Home</h1>
    <Link className={buttonVariants()} href='/admin'>
     Open My Admin
     </Link> */}
    
    {/* <h2>Client Session</h2>
    <User/>
    <h2>Server Session</h2>
    {JSON.stringify(session)} */}

    
    </>


  );
}
