import React, {useState, useEffect} from "react";
import axios from '../request';
import "../css/Home.css";

function HomeRanking(props) {

  
 const [game, setGame] = useState(null);
 const [Loading, setLoading] = useState(false);
 const [error, setError] = useState(null);


  const id = Number(props.id);
  const title = [["항목","타율","출루율","장타율","타점","득점","홈런"],
                ["항목","다승","세이브","홀드","삼진","도루","방어율"]] 

                useEffect(()=>{
                  const fetchTeam = async () => {
                      try {
                          setError(null);
                          setGame(null);
                          setLoading(false)
                          //const Url = "/players/" + Player_Arr[id]
                          const response = await axios.get("/realtime-ranking");
                          setGame(response.data.data);
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
  if (!game) return null;
              
              

  return (
    <div>
      <table className="Home_Player_Ranking_Table">
      {title[id].map((title) => (
          <th>{title}</th>
      ))}
        <tr><td>1</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td></tr>
        <tr><td>1</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td></tr>
        <tr><td>1</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td><td>김광현(0.789)</td></tr>

     </table>
    </div>
  );
}

export default HomeRanking;