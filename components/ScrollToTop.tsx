"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ManualScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

  }, [pathname]); 

  return null;
}

export default ManualScrollRestoration;