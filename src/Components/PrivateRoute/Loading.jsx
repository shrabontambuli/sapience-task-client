import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <HashLoader color="#6419E6" loading={true} size={150} />
    </div>
  );
};

export default Loading;
