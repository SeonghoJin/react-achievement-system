import * as React from 'react';
import {ReactElement, ReactNode} from "react";
import { RecoilState} from "recoil";
import {AchievementViewer} from "../component/AchievementViewer";
import {AchievementType, useAchievementSystemStore} from "./useAchievementSystemStore";

export type AchievementSystemOptions<T> = {
    children: ReactNode,
    store: RecoilState<T>,
    time?: number,
};
export type AchievementSystemType = <T extends AchievementType>(arg: AchievementSystemOptions<T>) => ReactElement;

export const AchievementSystem : AchievementSystemType = ({children, store,time = 3}) => {
console.log(store);
    const {achievementStore} = useAchievementSystemStore(store);

    return (
        <>
            <AchievementViewer achievements={achievementStore} time={time}/>
            {children}
        </>
    );
};
