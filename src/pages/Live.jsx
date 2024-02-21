import { useEffect, useState, useContext } from "react";
import Displayer from "../components/Displayer";
import { getLiveData } from "../utils/RequestMaker";
import Loader from "../components/Loader";
import { Context } from "../utils/Context";

export default function Live() {
  const [matches, setMatches] = useState([]);
  const { currentPage, updateCurrentPage } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        updateCurrentPage("/live")
        const arrFetchedMatches = await getLiveData(); 
        setMatches(arrFetchedMatches);
        setTimeout(() => {
          setLoading(false);
        }, 10000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMatches();
  }, []);

  useEffect(()=> {
    // console.log(matches)
  }, [matches])

  return (
    <>
      <div className="pt-2 pb-1 text-center">
        <span className="fs-4 fw-bold">Live Matches</span>
      </div>
      <div className="d-flex flex-fill justify-content-center py-2" style={{alignItems: (matches?.length > 0) ? "start" : "center"}}>
        {(matches?.length <= 0 && loading) && <Loader/>}
        {(matches?.length <= 0 && !loading) && <div className="d-flex justify-content-center align-items-center">
          <span className="fs-6">No Match Found</span>
        </div>}
      {(matches?.length > 0) && <Displayer data={matches} />}
      </div>
    </>
  );
}
