#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'gradingStudents' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY grades as parameter.
#

def gradingStudents(grades):
    grade_list = []
    for grade in grades:
        if grade < 38:
            grade_list.append(grade)
        else:
            if grade % 5 == 0:
                grade_list.append(grade)
            else:
                nextMultiple = math.floor(grade / 5) * 5 + 5
                if (nextMultiple - grade) < 3:
                    grade_list.append(nextMultiple)
                else:
                    grade_list.append(grade)
    return grade_list

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    grades_count = int(input().strip())

    grades = []

    for _ in range(grades_count):
        grades_item = int(input().strip())
        grades.append(grades_item)

    result = gradingStudents(grades)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()