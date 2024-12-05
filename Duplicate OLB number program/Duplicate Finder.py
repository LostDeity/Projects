# -*- coding: utf-8 -*-
"""
Created on Sat Sep 23 13:50:25 2023

@author: erinc
"""

import openpyxl
import pandas as pd

df = pd.read_csv("Permits - Sheet1.csv")
df2 = df[df.duplicated(['OLB NO.'], keep=False)]
df2 = df2[df2['OLB NO.'] != 'SCRAPPED']
df2 = df2[df2['OLB NO.'] != 'SOLD']
df2 = df2[df2['OLB NO.'] != 'REPLACEMENT IN PROGRESS']
df2 = df2[df2['OLB NO.'] != 'NONE']
df2.to_excel(r'Duplicates.xlsx', index = None, header=True)

            