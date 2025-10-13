/**
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
  const intersection: number[] = []
  const nums2Copy = [...nums2]
  
  for (const num of nums1) {
    const index = nums2Copy.indexOf(num)
    if (index !== -1) {
      intersection.push(num)
      nums2Copy.splice(index, 1)
    }
  }

  return intersection
}