import "./loading.css";

const loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader">
          <div className="tile"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
