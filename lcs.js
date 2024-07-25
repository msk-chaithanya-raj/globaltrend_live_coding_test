const readlineSync = require('readline-sync');

function longestCommonSubsequence(str1,str2){
    const m = str1.length;
    const n = str2.length;

    const dp = Array.from(Array(m+1), () => Array(n+1).fill(0));

    for(let i = 1; i<= m;i++) {
        for (let j = 1; j<=n;j++) {
            if(str1[i-1] === str1[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }

        }
    }
     return dp[m][n];
}

function getInputStrings() {
    const str1 = readlineSync.question('Enter the first string: ');
    const str2 = readlineSync.question('Enter the second string: ');
    return {str1, str2};
}

function main() {
    const {str1,str2} = getInputStrings();
    const lengthOfLcs = longestCommonSubsequence(str1,str2);
    console.log(`The length of the longest common subsequence is ${lengthOfLcs}`)
}

main();