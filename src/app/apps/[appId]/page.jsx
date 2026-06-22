import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const AppDetailPage = async ({ params }) => {
  const { appId } = await params;
  //   console.log("App ID: ", appId);
  const appsData = await fetch("https://mil7-co2.vercel.app/data.json", {
    cache: "no-store",
  }).then((res) => res.json());
  const expectedId = appsData.find((app) => app.id == appId);

  return (
    <div className="my-10">
      <div className="card  bg-base-100 shadow-sm w-6/12 p-10 mx-auto">
        <figure>
          <Image
            src={expectedId?.image}
            alt={expectedId?.title}
            width={170}
            height={170}
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">Apps Name: {expectedId?.title}</h2>
            <h2 className="card-title">
              Company Name:{expectedId?.companyName}
            </h2>
          </div>
          <p>{expectedId?.description}</p>

          <div className="flex justify-between  ">
            <div className="text-green-500 font-bold flex items-center gap-2">
              <GoDownload /> {expectedId?.downloads}
            </div>
            <div className="text-yellow-500 font-bold flex  gap-2">
              <FaStar /> {expectedId?.ratingAvg}
            </div>
          </div>
          <div className="flex justify-between  ">
            <div className="text-green-500 font-bold flex items-center gap-2">
              Size: {expectedId?.size} MB
            </div>
            <div className="text-yellow-500 font-bold flex  gap-2">
              Reviews: {expectedId?.reviews}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-5">
          <button className="btn bg-purple-500 text-white">Install Now</button>
        </div>
      </div>
    </div>
  );
};

export default AppDetailPage;
