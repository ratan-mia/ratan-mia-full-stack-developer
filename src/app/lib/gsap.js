'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  gsap.defaults({ ease: 'power3.out', duration: 1 });
}

export const EASE_OUT = 'expo.out';
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, SplitText, useGSAP };
