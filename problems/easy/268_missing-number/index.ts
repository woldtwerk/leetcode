/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */

export function missingNumber(nums: number[]): number {
  const set = new Set([...Array(nums.length + 1).keys()])
  nums.forEach(num => set.delete(num))
  return set.keys().next().value || 0
}
