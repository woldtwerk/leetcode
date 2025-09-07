/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

export function majorityElement(nums: number[]): number {
  const map = new Map<number, number>()
  let max = 0
  let maxNum = 0
  const threshold = Math.round(nums.length / 2)

  for (const num of nums) {
    const val = (map.get(num) ?? 0) + 1
    if (val > threshold)
      return num
    map.set(num, val)
    val > max && (max = val, maxNum = num)
  }

  return maxNum
}
