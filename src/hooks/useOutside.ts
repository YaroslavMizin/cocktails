import { Dispatch, useEffect, useRef, SetStateAction } from 'react';

export default function useOutside(ref: any, callback: Dispatch<SetStateAction<boolean>>) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}