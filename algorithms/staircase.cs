using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {

    // Complete the staircase function below.
    static void staircase(int n) {
        for (int j = 0; j < n; j++){
            for (int i = n - 1; i >= 0; i--){
                if (i <= j){
                    if (i == 0){
                        Console.WriteLine('#');
                    }else{
                        Console.Write('#'); 
                    }
                }else{
                    Console.Write(' ');
                }
            }
        }
    }

    static void Main(string[] args) {
        int n = Convert.ToInt32(Console.ReadLine());

        staircase(n);
    }
}