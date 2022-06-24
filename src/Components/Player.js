import React, {useState, useEffect} from "react";
import axios from '../request';
import { useLocation } from 'react-router-dom';
import Nav from "./Nav";
import {NavLink} from "react-router-dom";
import "../css/Player.css";

function Player() {

 const [game, setGame] = useState(null);
 const [Loading, setLoading] = useState(false);
 const [error, setError] = useState(null);


  const Player_Arr = ["OPS","ERA"];
  const title = ["OPS (출루율 + 장타율)", "ERA (평균 자책점)"]
  const desc = [" 'On-Base Plus Slugging' \n 출루율과 장타율을 더한 값으로, 득점에 많이 공헌하는 타자를 알 수 있습니다. \n\n 출루율은 (안타 + 볼넷 + 몸에 맞는 공) / (타수 + 볼넷 + 몸에 맞는 공 + 희생플라이) 로 정의되고, \n 장타율 = (단타 + 2루타X2 +3루타X3 + 홈런X4) 를 타수로 나눈 값입니다.",
  " 투수를 평가하는 지표 중 하나, '방어율'이라고 한다. 1경기당 9이닝으로 볼때의 1경기에서 얼마나 점수를 내줄 수 있느냐를 판단할 수 있다.\n 투수의 9이닝 당 자책점으로 나타내며 (9 * 자책점) / 투구이닝 으로 계산한다. \n\n 만약 투수가 아웃 카운트를 한 번도 잡지 못한 채 자책점만 내준다면 그 선수의 평균자책점은 원칙적으로 다음 경기에서 투구 이닝이 추가될 때까지 계산이 유보되어 \n 해당 투수의 평균자책점 자체가 정의되지 않거나 무한대(∞)가 되지만  경기장 전광판이나 기록에서는 편의상 0.00으로 기록된다."]
  const location = useLocation();
  const id = Number(location.pathname.split("/")[2]);
  const move_id = ((id+1) % 2)
  const ranking_titles =[["", "이름", "팀", "OPS", "게임수", "타석", "타율","안타", "홈런", "타점", "도루", "삼진" ,"병살" ,"WAR"],
  ["","이름", "팀", 'ERA', '승', '패', '이닝', '실점', '자책','피안타','홈런', '볼넷', '삼진', 'WAR']]

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
            console.log(e)
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
      <Nav/>
      <div className="player_info">
        <p className="other_player">
          <p style={{fontSize:"18px"}}><NavLink to={`/Player/${move_id}`} className="linktootherside" style={{ textDecoration: 'none', fontSize: "18px", color:"black"}} > {Player_Arr[move_id]} </NavLink> 보러가기</p>
        </p>
        <p className="player_title">{title[id]}</p>
        <p style={{whiteSpace: "pre-wrap"}}>{desc[id]}</p>
      </div>
      <div style={{width: "600px", height: "620px"}}>
      {
<<<<<<< HEAD
        <table>
      {ranking_titles[id].map((title) => (
          <th>{title}</th>
      ))}
            {game.map((rank)=>(
               <tr>
=======
        <table  style={{backgroundColor: "white", marginlLeft:"auto", marginRight:"auto", borderRadius: "10px 10px", width: "600px",height: "78vh", paddingTop: "25px"}}>
      {ranking_titles[id].map((title, index) => (
          <th>{title}</th>
      ))}
            {game.map((rank,idx)=>(
               <tr style={{textAlign: "center"}}>
>>>>>>> 711d54e37dde12f8ff5e0c564c6cba13896f8f7c
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                   <td>{rank.ranking}</td>
                    </tr> 
            ))}

        </table>
      }
      </div>
    </div>
  );
}

export default Player