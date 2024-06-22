"use client"

import React from 'react'
import { Image } from 'lucide-react'

import { useState, useRef } from "react";

const Grid = () => {
    const [isPause , setIsPasused] = useState(false);
    const vidRef = useRef<HTMLVideoElement>(null);

  return (
    

<div className="grid grid-cols-2 gap-2">
        <div>
        <video className="w-h-auto max-w-full rounded-lg" ref={vidRef} controls autoPlay>
                <source src="/video1.mp4" type="video/mp4" />
              </video>

            
        </div>
        <div>
        <video className="w-h-auto max-w-full rounded-lg" ref={vidRef} controls autoPlay>
                <source src="/video2.mp4" type="video/mp4" />
              </video>
        </div>
        <div>
        <video className="w-h-auto max-w-full rounded-lg" ref={vidRef} controls autoPlay>
                <source src="/video3.mp4" type="video/mp4" />
              </video>
        </div>
        <div>
        <video className="w-h-auto max-w-full rounded-lg" ref={vidRef} controls autoPlay>
                <source src="/video1.mp4" type="video/mp4" />
              </video>
        </div>
    </div>

  )
}

export default Grid