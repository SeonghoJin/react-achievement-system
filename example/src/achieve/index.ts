import { atom } from "recoil";

export const achievementStore = atom({
    key: 'achievement-store',
    default: {
        "hi" : false,
        "hello" : false
    }
});

