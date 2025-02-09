import React, { useState, useEffect } from "react";
import backgroundMusic from "../assets/Flower.mp3";

// Глобальная переменная для хранения экземпляра аудио
let globalAudio = null;

const MusicPlayer = () => {
  // Если globalAudio уже существует и не на паузе, начальное состояние будет true
  const initialStarted = globalAudio ? !globalAudio.paused : false;
  const [hasStarted, setHasStarted] = useState(initialStarted);

  useEffect(() => {
    if (!globalAudio) {
      // Создаем глобальный экземпляр аудио один раз
      globalAudio = new Audio(backgroundMusic);
      globalAudio.loop = true;
      globalAudio.volume = 0.5;
    }
    // Если аудио уже воспроизводится, обновляем состояние
    if (!globalAudio.paused && !hasStarted) {
      setHasStarted(true);
    }
  }, [hasStarted]);

  const handleStart = () => {
    if (globalAudio) {
      globalAudio
        .play()
        .then(() => setHasStarted(true))
        .catch((err) => console.error("Ошибка воспроизведения:", err));
    }
  };

  // Если музыка не запущена, отображаем кнопку
  if (!hasStarted) {
    return <button onClick={handleStart}>Click for music</button>;
  }

  // Если музыка уже воспроизводится, ничего не рендерим
  return null;
};

export default MusicPlayer;
