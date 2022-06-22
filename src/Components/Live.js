import React, {useState, useEffect} from "react";
import axios from '../request';
import "../css/Live.css";

function Live() {

  const [game, setGame] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);

  let now = new Date();
  let today_month = now.getMonth() + 1;
  let today_date =  now.getDate();
  const week = ["일","월","화","수","목","금","토"];
  let dayOfWeek = week[now.getDay()];

  useEffect(()=>{
      const fetchTeam = async () => {
          try {
              setError(null);
              setGame(null);
              setLoading(false)
              const response = await axios.get("/realtime-game/");
              console.log(response.data)
              console.log(response.data.statusCode)
              setCode(response.data.statusCode)
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

  function content(){
    if(code === 204){
      return(
        <div>오늘은 경기가 없습니다</div>
      );}else{
        return(
         <div>
           {game.map((game,idx)=>(
            <div className="Live_Each">
              <div className="Live_Content">
                <div className="Left_Team">
                  {game.leftTeam}
                  -
                  {game.leftPitcher}
                </div>
                <div className="Score_Total">
                  <div className="State">
                    {game.gameState}
                  </div>
                  <div className="Score">
                    {game.leftScore} : {game.rightScore}
                  </div>
                </div>
                <div className="Right_Team">
                  {game.rightTeam}
                  -
                  {game.rightPitcher}
                </div>
              </div>
            </div>

           ))}
         </div>
        );
      }
    }

  

  return (
    <div className="Live_Page">
      <div className="Live_Container">
        <h1>KBO 정규리그 경기 결과</h1>
        <div className="Live_table">
        <p className="Date"> {today_month}.{today_date} ({dayOfWeek})</p>
        {content()}
        </div>
      </div>
    </div>
  );
}

export default Live;