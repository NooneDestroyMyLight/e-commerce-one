import { useCallback, useMemo, useState } from "react";

export interface useCounterReturn {
  count: number;
  isReduceDisabled: boolean;
  doIncrease: () => void;
  doReduce: () => void;
}

export interface useToggleReturn {
  value: boolean;
  doClose: () => void;
  doOpen: () => void;
  doToggle: () => void;
}

export const useCounter = (initial: number = 1): useCounterReturn => {
  if (initial < 1) initial = 1;
  const [count, setCount] = useState<number>(initial);

  const doIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const doReduce = useCallback(() => {
    if (count < 2) return;
    setCount(count - 1);
  }, [count, setCount]);

  const isReduceDisabled = useMemo(() => {
    return count < 2;
  }, [count]);

  //   const isIncreaseDisabled = useMemo(() => {
  //     return count < productCountLimit;
  //   }, [count]);

  return useMemo(() => {
    return { count, isReduceDisabled, doIncrease, doReduce };
  }, [count, doIncrease, doReduce, isReduceDisabled]);
};

export const useToggle = (initial = false): useToggleReturn => {
  const [value, setState] = useState(initial);

  const doClose = useCallback(() => {
    setState(false);
  }, [setState]);

  const doOpen = useCallback(() => {
    setState(true);
  }, [setState]);

  const doToggle = useCallback(() => {
    setState(!value);
  }, [value, setState]);

  return useMemo(
    () => ({ value, doClose, doOpen, doToggle }),
    [value, doClose, doOpen, doToggle]
  );
};
