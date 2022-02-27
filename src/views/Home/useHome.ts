import { useRef, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { getExchanges } from "../../api/exchanges";

export interface ScrollIndicators {
  left: boolean;
  right: boolean;
}

const useHome = () => {
  const {
    data: exchanges,
    error,
    isLoading,
  } = useQuery("exchangesData", () => getExchanges());

  const [scrollIndicatorsState, setScrollIndicatorsState] =
    useState<ScrollIndicators>({
      left: true,
      right: false,
    });

  const containerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    if (containerRef.current) {
      const { scrollWidth, scrollLeft, offsetWidth } = containerRef.current;
      setScrollIndicatorsState({
        left: scrollLeft > 0,
        right: !(scrollWidth - offsetWidth === scrollLeft),
      });
    }
  };

  useEffect(() => {
    containerRef?.current?.addEventListener("scroll", onScroll);
    return () => containerRef?.current?.removeEventListener("scroll", onScroll);
  }, [exchanges]);

  return { exchanges, error, isLoading, scrollIndicatorsState, containerRef };
};

export default useHome;
