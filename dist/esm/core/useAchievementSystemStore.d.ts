import { RecoilState } from "recoil";
export declare type AchievementType = Record<string, boolean>;
export declare type UseAchievementSystemStoreReturnType<T> = {
    achievementStore: T;
};
export declare type AchievementSystemStoreType = <T extends AchievementType>(props: RecoilState<T>) => UseAchievementSystemStoreReturnType<T>;
export declare const useAchievementSystemStore: AchievementSystemStoreType;
