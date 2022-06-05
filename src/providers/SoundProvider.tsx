import React, { useMemo, useState } from 'react';

declare global {
    interface Window {
      webkitAudioContext: typeof AudioContext
    }
}

const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
const NOTE_DURATION = 50;
export interface ISoundContext {
  playNote: (val: number) => void;
  playMelody: (melody: number[], tempo: number) => void;
}

export const SoundContext = React.createContext<ISoundContext>({
    playNote: (val) => {},
    playMelody: (melody, tempo) => {},
});

export const SoundProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {

    const playNote = (note: number) => {
        console.log(note);
        const oscillator = audioCtx.createOscillator();

        oscillator.type = 'square';
        oscillator.frequency.value = note; // value in hertz
        oscillator.connect(audioCtx.destination);
        oscillator.start();

        setTimeout( () => {
            oscillator.stop();
        }, NOTE_DURATION);
    }
    const playMelody = (note: number[]) => {
        console.log(note)
    }
  const contextValue = useMemo(
    () => ({
        playNote,
        playMelody,
    }),
    [playNote, playMelody],
  );

  return (
    <SoundContext.Provider value={contextValue}>{children}</SoundContext.Provider>
  );
};
