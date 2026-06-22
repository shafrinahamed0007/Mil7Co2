const Stats = () => {
  return (
    <div className="bg-purple-500 text-white  font-bold text-center min-h-[35vh] ">
      <div className="h-[50%] flex justify-center items-centerm ">
        <h2 className="text-3xl my-5">Trusted By Millions, Built For You</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 bh-[50%] md:w-8/12 mx-auto  ">
        <div>
          <p>Total Downloads</p>
          <h2 className="text-2xl ">29.6M</h2>
          <p>21% More Than Last Month</p>
        </div>
        <div>
          <p>Total Downloads</p>
          <h2 className="text-2xl">29.6M</h2>
          <p>21% More Than Last Month</p>
        </div>
        <div>
          <p>Total Downloads</p>
          <h2 className="text-2xl">29.6M</h2>
          <p>21% More Than Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
