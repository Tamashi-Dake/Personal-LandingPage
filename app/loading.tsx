import { LoadingSpinner } from "./components/skeletons/LoadingSpinner";

const loading = () => {
  return (
    <main className="w-screen flex items-center justify-center h-screen">
      <LoadingSpinner className="text-white" />
    </main>
  );
};

export default loading;
