/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

export function twoSum(nums: number[], target: number): number[] {
  const hashTable = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (hashTable.has(target - nums[i])) {
      return [hashTable.get(target - nums[i])!, i]
    }

    hashTable.set(nums[i], i)
  }

  return []
}
