/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

export function climbStairs(n: number): number {
  let a = 1, b = 1
  
  for (let i = 2; i <= n; i++) {
    const temp = a + b
    a = b
    b = temp
  }
  
  return b
}