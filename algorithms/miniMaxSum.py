#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
    minVal = min(arr)
    maxVal = max(arr)
    summation = sum(arr)
    print(str(summation - maxVal) + ' ' + str(summation - minVal))
        

if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
