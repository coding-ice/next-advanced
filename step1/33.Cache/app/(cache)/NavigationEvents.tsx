"use client";
import { useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NavigationEvents() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    router.refresh();
  }, [pathname, params]);

  return null;
}

export default NavigationEvents;
