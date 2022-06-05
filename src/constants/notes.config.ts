import React from 'react';

export enum NoteType {
    WhiteKey = 'white-key',
    BlackKey = 'black-key',
}

export interface INote { 
    key: string, 
    type: NoteType, 
    hz: number 
}

export const NOTES_CONFIG: INote[] = [
    { key: "A", type: NoteType.WhiteKey, hz: 50 },
    { key: "C", type: NoteType.WhiteKey, hz: 150 },
    { key: "D", type: NoteType.WhiteKey, hz: 200 },
    { key: "E", type: NoteType.WhiteKey, hz: 250 },
    { key: "B", type: NoteType.WhiteKey, hz: 100 },
    { key: "F", type: NoteType.BlackKey, hz: 300 },
    { key: "G", type: NoteType.BlackKey, hz: 350 },
    { key: "H", type: NoteType.BlackKey, hz: 400 },
    { key: "I", type: NoteType.BlackKey, hz: 450 },
];