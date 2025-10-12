/**
Given two integer arrays nums1 and nums2, return an array of their . Each element in the result must be unique and you may return the result in any order.
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = []
  const [short, long] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1]
  for (const num of short) {
    if (long.includes(num) && !intersection.includes(num)) {
      intersection.push(num)
    }
  }

  return intersection
}
// export function intersection(nums1: number[], nums2: number[]): number[] {
//   return Array.from(new Set(nums1).intersection(new Set(nums2)))
// }
