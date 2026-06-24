import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const TrendingAppsCard = ({ app }) => {
  return (
    <div>
      <Link href={`/apps/${app.id}`}>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image className="rounded-2xl" src={app?.image} alt={app?.title} width={170} height={170} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app?.title}</h2>
            <div className="flex justify-between  ">
              <div className="text-green-500 font-bold flex items-center gap-2">
                <GoDownload /> {app?.downloads}
              </div>
              <div className="text-yellow-500 font-bold flex  gap-2">
                <FaStar /> {app?.ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TrendingAppsCard;
