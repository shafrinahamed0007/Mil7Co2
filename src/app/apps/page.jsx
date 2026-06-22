import TrendingAppsCard from "@/components/Home/TrendingAppsCard";
import Loading from "@/components/Loading";
import Link from "next/link";
import { Suspense } from "react";

const AppsPage = async () => {
  const apps = await fetch("https://mil7-co2.vercel.app/data.json").then(
    (res) => res.json(),
  );
  return (
    <div className="md:w-10/12 mx-auto ">
      <h2>All Apps</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {apps.map((app) => (
          <Link key={app.id} href={`/apps/${app?.id}`}>
            <Suspense  fallback={<Loading />}>
              <TrendingAppsCard app={app} />
            </Suspense>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppsPage;
