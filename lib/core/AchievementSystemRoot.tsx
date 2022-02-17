import * as React from 'react';
import {RecoilRoot} from "recoil";
import {AchievementSystem, AchievementSystemOptions} from "./AchievementSystem";
import {ReactElement} from "react";
import {AchievementType} from "./useAchievementSystemStore";

export type AchievementSystemRootType = <T extends AchievementType>(options: AchievementSystemOptions<T>) => ReactElement;

export const AchievementSystemRoot: AchievementSystemRootType = (options) => {
    return (
        <RecoilRoot>
            <AchievementSystem {
                ...options
            }/>
        </RecoilRoot>
    );
};
