import React, {useState, useEffect} from "react";
import axios from '../request';

function RankingPrediction() {
  const [ranking, setRanking] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(()=>{
      const fetchTeam = async () => {
          try {
              setError(null);
              setRanking(null);
              setLoading(false)
              const response = await axios.get("/realtime-ranking");

            setRanking(response.data.data);
          } catch(e){
              setError(e);
          }
          setLoading(false);
      };
      
      fetchTeam()
  }

  ,[]);

  const table_title = ["순위","팀"]

  if (Loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ranking) return null;

  return (
    <div>
        { <table>
           {table_title.map((title)=>(
               <th className="Home_Table_Title">{title}</th>
           ))}
            {ranking.map((rank)=>(
               <tr className="Table_Content" style={{textAlign: "center"}}>
                   <td>{rank.ranking}</td>
                   <td>{rank.team}</td>
               </tr> 
            ))}
        </table> }
    </div>
  );
}

export default RankingPrediction;