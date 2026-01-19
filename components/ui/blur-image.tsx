"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BlurImage({ src, className, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      className={cn(
        "duration-700 ease-in-out",
        isLoading
          ? "scale-110 blur-xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        className,
      )}
      src={src}
      alt={alt}
      onLoad={() => setLoading(false)}
      {...props}
    />
  );
}
