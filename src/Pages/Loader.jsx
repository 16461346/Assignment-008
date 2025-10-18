import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader color="#632EE3" size={60} />
    </div>
  );
}

export default Loader;
