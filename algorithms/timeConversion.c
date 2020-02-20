#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* readline();

/*
 * Complete the timeConversion function below.
 */

/*
 * Please either make the string static or allocate on the heap. For example,
 * static char str[] = "hello world";
 * return str;
 *
 * OR
 *
 * char* str = "hello world";
 * return str;
 *
 */
char* timeConversion(char* s) {
    static char militaryTime[8]; 
    char hourChar[2]; 
    hourChar[0] = s[0];
    hourChar[1] = s[1]; 
    int hour = atoi(hourChar); 
    if (s[8] == 'P'){
        if (hour == 12){
            for (int i = 0; i < strlen(s) - 2; i++){
                militaryTime[i] = s[i]; 
            }
        }else{
            hour += 12; 
            militaryTime[0] = (hour / 10) + '0';
            militaryTime[1] = (hour % 10) + '0';
            for (int i = 2; i < strlen(s) - 2; i++){
                militaryTime[i] = s[i]; 
            }
        }
    }else{
        if (hour == 12){
            militaryTime[0] = '0';
            militaryTime[1] = '0';
            for (int i = 2; i < strlen(s) - 2; i++){
                militaryTime[i] = s[i]; 
            }
        }else{
            for (int i = 0; i < strlen(s) - 2; i++){
                militaryTime[i] = s[i]; 
            }
        }        
    }
    return militaryTime;
}

int main()
{
    FILE* fptr = fopen(getenv("OUTPUT_PATH"), "w");

    char* s = readline();

    char* result = timeConversion(s);

    fprintf(fptr, "%s\n", result);

    fclose(fptr);

    return 0;
}

char* readline() {
    size_t alloc_length = 1024;
    size_t data_length = 0;
    char* data = malloc(alloc_length);

    while (true) {
        char* cursor = data + data_length;
        char* line = fgets(cursor, alloc_length - data_length, stdin);

        if (!line) { break; }

        data_length += strlen(cursor);

        if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') { break; }

        size_t new_length = alloc_length << 1;
        data = realloc(data, new_length);

        if (!data) { break; }

        alloc_length = new_length;
    }

    if (data[data_length - 1] == '\n') {
        data[data_length - 1] = '\0';
    }

    data = realloc(data, data_length);

    return data;
}
