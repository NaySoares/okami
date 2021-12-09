import useIndicatorScroll from "../../hooks/useIndicatorScroll";
import './PageProgress.scss';

export function PageProgress () {
  const progressBar = useIndicatorScroll();
  return(
    <div id="pageProgress" style={{ width: `${progressBar}%` }}></div>
  )
}