function knapsack(weights,values,capacity) {
    const n = weights.length;
    const dp = new Array(n+1).fill(null).map(()=> new Array(capacity + 1 ).fill(0));
    for (let i = 0; i <= n; i++) {
        for(let w= 0; w<= capacity;w++) {
            if(i === 0 || w === 0) { 
                dp[i][w] = 0;
            }
            else if(weights[i-1] <= w) {
                dp[i][w] = Math.max(values[i-1]+ dp[i-1][w-weights[i-1]],dp[i-1][w]);
            
            }
            else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }
    return dp[n][capacity];
}

const weights = [1,2,3,4,5];
const values = [10,20,30,40,50];

const capacity = 7;

const maxValue = knapsack(weights,values,capacity);
console.log('Max. Values that can be obtainer',maxValue);