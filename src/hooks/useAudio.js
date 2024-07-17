import { useEffect, useState } from 'react';
import bgm from '../assets/BGM.mp3';

const useAudio = () => {
  const [audio] = useState(new Audio(bgm));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.removeEventListener('ended', () => audio.play());
    };
  }, [audio]);

  useEffect(() => {
    const playAudio = () => {
      setPlaying(true);
    };

    document.addEventListener('click', playAudio, { once: true });

    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;