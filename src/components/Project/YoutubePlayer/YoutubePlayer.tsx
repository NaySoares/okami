import YouTube from 'react-youtube';
interface YoutubeProps{
  videoId: string;
}
export function YouTubePlayer({videoId}: YoutubeProps){
  const opts: any = {
    height: '150',
    width: '270',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  return(
    <YouTube videoId={videoId} opts={opts} />
  )
}