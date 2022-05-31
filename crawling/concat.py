# import pandas as pd
# from datetime import date 
# base_dir = "C:/Users/Jeong Hyunji/Desktop/baseball/crawling/data/"

# def processing(team):
#     df = pd.read_excel(f'data\{team}.xlsx', header=0)  
#     df["team"] = team
#     return df

# team_list = ["KBO","한화","롯데","SSG","KIA","삼성","키움","LG","NC","두산","kt"]

# full = pd.DataFrame(columns=["날짜", "제목", "내용", "URL","team"])

# for i in range(len(team_list)) :
#     df_team = processing(team_list[i])
#     full = pd.concat([full, df_team])
    
# full.to_excel(base_dir + "full_contain_url.xlsx", index=False)
