import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the breakingRecords function below.
    static int[] breakingRecords(int[] scores) {
        int currentMin = scores[0];
        int currentMax = scores[0];
        int numMinBreaks = 0;
        int numMaxBreaks = 0;
        for (int i = 1; i < scores.length; i++){
            if (scores[i] > currentMax){
                currentMax = scores[i];
                numMaxBreaks++;
            }else if (scores[i] < currentMin){
                currentMin = scores[i];
                numMinBreaks++; 
            }
        }
        int[] output = {numMaxBreaks, numMinBreaks};
        return output; 
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] scores = new int[n];

        String[] scoresItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int scoresItem = Integer.parseInt(scoresItems[i]);
            scores[i] = scoresItem;
        }

        int[] result = breakingRecords(scores);

        for (int i = 0; i < result.length; i++) {
            bufferedWriter.write(String.valueOf(result[i]));

            if (i != result.length - 1) {
                bufferedWriter.write(" ");
            }
        }

        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}