import openpyxl
import requests
from bs4 import BeautifulSoup
import pyautogui
from openpyxl import Workbook
from tqdm import tqdm
from datetime import date,datetime
import re
import pandas as pd

#team_list = ["KBO","한화","롯데","SSG","KIA","삼성","키움","LG","NC","두산","kt"]

team = pyautogui.prompt("구단 이름을 입력하세요")

fpath = r'C:\Users\Jeong Hyunji\Desktop\baseball\crawling\크롤링.xlsx'

page = 0 


wb = openpyxl.load_workbook(fpath)
ws = wb[team]

data = pd.read_excel(fpath, sheet_name = team)
urls = data['URL']

for index,url in tqdm(enumerate(urls)):

    i = index + 2

    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html,'html.parser')
    contents = soup.find(id= "contentDetail")
    content = str(contents)
    content = re.sub('(<([^>]+)>)', ' ', content).strip()
    content = re.sub(' +', ' ', content)
    ws.cell(row=i, column=3).value = content
    
    print(i, content)

wb.save(fpath)