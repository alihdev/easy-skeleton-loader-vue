export type SkeletonAnimation = 'fade-in' | 'wave'

export interface SkeletonProps {
  count?: number
  width?: string | number
  height?: string | number
  radius?: number
  delay?: number
  animation?: SkeletonAnimation
}

export type SkeletonTypes = 'text' | 'button' | 'avatar' | 'input'