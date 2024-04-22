import { Watch } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        paddingTop:"20px"
    }}>
      <Watch
        visible={true}
        height="120"
        width="120"
        radius="48"
        color="#fbff41"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
