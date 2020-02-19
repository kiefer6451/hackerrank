#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the migratoryBirds function below.
def migratoryBirds(arr):
    frequencies = [0, 0, 0, 0, 0]
    for bird in arr:
        frequencies[bird-1] += 1
    mode = max(frequencies)
    for i in range(0, len(frequencies)):
        if mode == frequencies[i]:
            return i + 1

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = migratoryBirds(arr)

    fptr.write(str(result) + '\n')

    fptr.close()