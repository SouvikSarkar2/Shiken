import "../loader.css";

const loading = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="loader">
          <div className="tile"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
