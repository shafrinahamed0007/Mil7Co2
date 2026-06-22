import React, { Suspense } from "react";
import TrendingAppsCard from "./TrendingAppsCard";
import Loading from "../Loading";

const TrendingApps = async () => {
  const appsData = await fetch("https://mil7-co2.vercel.app/data.json").then(
    (res) => res.json(),
  );
  return (
    <div className="md:w-10/12 mx-auto my-[60px]">
      <div className="mb-8 text-center space-y-5">
        <h2 className="font-bold text-4xl">Trending Apps</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde,
          voluptas tempore pariatur asperiores, tempora deserunt, magni dolorem
          saepe deleniti repellat. Illo eveniet ipsam quasi explicabo
          perspiciatis quis voluptas harum?
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appsData.slice(0, 8).map((app) => (
          <Suspense key={app.id} fallback={<Loading />}>
            <TrendingAppsCard app={app} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
