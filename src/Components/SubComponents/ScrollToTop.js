import { useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView();
  }, [pathname]);

  return <div ref={ref}/>;
}