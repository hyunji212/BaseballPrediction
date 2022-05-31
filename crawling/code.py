# import openpyxl
# import requests
# from bs4 import BeautifulSoup
# from tqdm import tqdm
# from datetime import datetime, timedelta
# import pandas as pd
# import re
# import schedule
# import time

# team_list = ["KBO","한화","롯데","SSG","KIA","삼성","키움","LG","NC","두산","kt"]

# fpath = 'C:/Users/Jeong Hyunji/Desktop/baseball/crawling/data/'

# yesterday = datetime.today().date() - timedelta(days=1)

# wb = openpyxl.load_workbook(fpath +"/new.xlsx")
# ws = wb.active

# def clear():
#     mr = ws.max_row
#     for row in ws[f'A1:G{mr}']:
#       for cell in row:
#         cell.value = None
#     wb.save(fpath+"new.xlsx")

# def code(team, yesterday) :
#     if ws["A1"].value is None:
#         ws["A1"] ='날짜'
#         ws["B1"] ='제목'
#         ws["C1"] ='내용'
#         ws["D1"] = 'URL'
#         ws["E1"] = 'team'

#         ws.column_dimensions['A'].width = 30
#         ws.column_dimensions['B'].width = 60
#         ws.column_dimensions['C'].width = 120
#         ws.column_dimensions['D'].width = 120

#     for i in tqdm(range(2001,0, -30)):
#         response = requests.get(f'https://mlbpark.donga.com/mp/b.php?p={i}&m=search&b=kbotown&query={team}&select=spf&user=')
#         html = response.text
#         soup = BeautifulSoup(html,'html.parser')
#         titles = soup.select(".tit > .txt")
#         #date 함수와 이름이 겹쳐 text_date로 사용
#         text_dates = soup.select("td > span.date")    
#         #도중에 게시판이 업데이트되면 손실을 최소화 하기 위해 역순으로 크롤링 진행
#         for title,text_date in reversed(list(zip(titles,text_dates))):

#             baseball_title = title.text
#             baseball_url = title.attrs["href"]
#             baseball_date = text_date.text
#             if baseball_date.split("-")[0] == '2022' :
#                 now = datetime.strptime(baseball_date, "%Y-%m-%d").date()

#             if (now == yesterday ) :
#                 ws.append([now,baseball_title," ",baseball_url,team])
#                 #print(baseball_title)
#     wb.save(fpath + "new.xlsx")

# def content( ) :
#     data = pd.read_excel(fpath +'new.xlsx')
#     urls = data['URL']

#     for index,url in tqdm(enumerate(urls)):

#         i = index + 2
#         if (ws.cell(row= i, column=3).value == " "):
#             try:
#                 response = requests.get(url)
#                 html = response.text
#                 soup = BeautifulSoup(html,'html.parser')
#                 contents = soup.find(id= "contentDetail")
#                 content = str(contents)
#                 content = re.sub('(<([^>]+)>)', ' ', content).strip()
#                 content = re.sub(' +', ' ', content)
#                 content = re.sub('[^A-Za-z0-9가-힣]', ' ', content)
#                 ws.cell(row=i, column=3).value = content
#                 print(i, content)

#             except requests.exceptions.Timeout as errd:
#                     print("Timeout Error : ", errd)
#             except requests.exceptions.HTTPError as errb:
#                     print("Http Error : ", errb)
#             except requests.exceptions.RequestException as erra:
#                     print("AnyException : ", erra)

#         if (i%100==0):
#              wb.save(fpath + "new.xlsx")

#     wb.save(fpath + "new.xlsx")

# def concat():
#     full = pd.read_excel(fpath+"full.xlsx", header=0) 
#     new = pd.read_excel(fpath+"new.xlsx", header=0)
#     new = new.drop(["URL"], axis=1)
#     new["content"] = new["제목"] + " " + new["내용"]
#     new= new.drop(["제목", "내용"], axis=1)
#     full = pd.concat([full,new])
#     full.to_excel(fpath+"full.xlsx", index=False)

# def job():
#     fpath = 'C:/Users/Jeong Hyunji/Desktop/baseball/crawling/data/'
#     yesterday = datetime.today().date() - timedelta(days=1)
#     wb = openpyxl.load_workbook(fpath +"/new.xlsx")
#     ws = wb.active
#     clear()
#     time.sleep(5)
#     for i in range(len(team_list)):
#         code(team_list[i],yesterday)
#     time.sleep(5)
#     content()
#     time.sleep(5)
#     concat()

# #schedule.every().day.at("00:30").do(job)

# while True:
#     schedule.run_pending()
#     time.sleep(1)