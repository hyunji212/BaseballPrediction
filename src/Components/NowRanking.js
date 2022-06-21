import React, {useState, useEffect} from "react";
import axios from 'axios';

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

              const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
              );
            setRanking(response.data);
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
        <table>
            <th>순위</th><th>팀</th><th>경기</th><th>승 - 패 - 무</th><th>승률</th><th>게임 차</th><th>연속</th>
            {ranking.map((rank,idx)=>(
               <tr>
                   <td>{idx+1}</td>
                   <td>{rank.username}</td>
                   <td>{rank.name}</td>
                   <td>{rank.name}</td>
                   <td>{rank.username}</td>
                   <td>{rank.name}</td>
                   <td>{rank.name}</td>
               </tr> 
            ))}
        </table>
    </div>
  );
}

export default NowRanking;