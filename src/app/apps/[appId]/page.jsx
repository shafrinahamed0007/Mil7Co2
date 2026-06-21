const AppDetailPage = async ({ params }) => {
  const { appId } = await params;
  return (
    <div>
      <h2 className="text-2xl">This is App Detail ID: {appId}</h2>
    </div>
  );
};

export default AppDetailPage;
