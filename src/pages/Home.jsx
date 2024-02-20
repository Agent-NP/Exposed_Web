import { useEffect, useState } from "react";
import Displayer from "../components/Displayer";
import { getYesterdayData } from "../utils/RequestMaker";

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const arrFetchedMatches = await getYesterdayData(); 
        setMatches(arrFetchedMatches);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMatches();
  }, []);

  useEffect(()=> {
    console.log(matches)
  }, [matches])

  return (
    <>
      <div className="pt-2 pb-1 text-center">
        <span className="fs-4 fw-bold">Matches</span>
      </div>
      {(matches?.length > 0) && <Displayer data={matches} />}
    </>
  );
}
