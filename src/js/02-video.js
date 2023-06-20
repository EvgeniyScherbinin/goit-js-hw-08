import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const CURRENTTIME_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
    const time = data.seconds;
    localStorage.setItem(CURRENTTIME_KEY, time)
};
  
const currentTime = localStorage.getItem(CURRENTTIME_KEY);

if (currentTime) {
    player.setCurrentTime(currentTime);
};