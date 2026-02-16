'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
    fallbackSrc?: string
    containerClassName?: string
}

export function OptimizedImage({
    src,
    alt,
    className,
    containerClassName,
    fallbackSrc = '/images/placeholder.jpg',
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    return (
        <div className={cn('relative overflow-hidden', containerClassName)}>
            {isLoading && (
                <Skeleton
                    className={cn(
                        'absolute inset-0 z-10 h-full w-full bg-muted animate-pulse',
                        className
                    )}
                />
            )}

            <Image
                src={error ? fallbackSrc : src}
                alt={alt}
                className={cn(
                    'duration-700 ease-in-out',
                    isLoading ? 'scale-110 blur-lg grayscale' : 'scale-100 blur-0 grayscale-0',
                    className
                )}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setError(true)
                    setIsLoading(false)
                }}
                {...props}
            />
        </div>
    )
}
