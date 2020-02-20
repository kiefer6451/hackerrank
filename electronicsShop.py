#!/bin/python3

import os
import sys

#
# Complete the getMoneySpent function below.
#
def getMoneySpent(keyboards, drives, b):
    minPrice = min(keyboards) + min(drives)
    if (b <= minPrice):
        return -1
    prices = []
    for keyboardPrice in keyboards:
        for drivePrice in drives:
            prices.append(keyboardPrice + drivePrice)
    prices.sort()
    maxPrice = prices.pop()
    while maxPrice > b:
        maxPrice = prices.pop()
    return maxPrice

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    bnm = input().split()

    b = int(bnm[0])

    n = int(bnm[1])

    m = int(bnm[2])

    keyboards = list(map(int, input().rstrip().split()))

    drives = list(map(int, input().rstrip().split()))

    #
    # The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    #

    moneySpent = getMoneySpent(keyboards, drives, b)

    fptr.write(str(moneySpent) + '\n')

    fptr.close()