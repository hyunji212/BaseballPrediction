import React, {useState, useEffect} from "react";
import axios from '../request';

function NowRanking() {
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

  if (Loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ranking) return null;

  return (
    <div>
        { <table>
            <th>순위</th><th>팀</th><th>경기</th><th>승 - 패 - 무</th><th>승률</th><th>게임 차</th><th>연속</th>
            {ranking.map((rank,idx)=>(
               <tr>
                   <td>{rank.ranking}</td>
                   <td>{rank.team}</td>
                   <td>{rank.gameNumber}</td>
                   <td>{rank.winNumber} <span>-</span> {rank.loseNumber} <span>-</span> {rank.drawNumber}  </td>
                   <td>{rank.winRate}</td>
                   <td>{rank.gameDiff}</td>
                   <td>{rank.continuity}</td>
               </tr> 
            ))}
        </table> }
    </div>
  );
}

export default NowRanking;