import { ReactElement, ReactNode } from "react";
import { RecoilState } from "recoil";
import { AchievementType } from "./useAchievementSystemStore";
export declare type AchievementSystemOptions<T> = {
    children: ReactNode;
    store: RecoilState<T>;
    time?: number;
};
export declare type AchievementSystemType = <T extends AchievementType>(arg: AchievementSystemOptions<T>) => ReactElement;
export declare const AchievementSystem: AchievementSystemType;
