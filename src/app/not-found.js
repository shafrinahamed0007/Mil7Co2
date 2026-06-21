import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div>
        <h2 className="text-4xl font-bold">This Page is Not Found</h2>
      </div>
      <br />
      <div>
        <Link href={"/"}>
          <button className="btn btn-primary">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
