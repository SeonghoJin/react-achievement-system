import { RecoilState } from "recoil";
import { AchievementType } from "./core/useAchievementSystemStore";
export declare type AchievementAction<T> = (achieveName: keyof T) => void;
export declare type UseAchieveReturnType<T> = {
    achieve: AchievementAction<T>;
};
export declare type UseAchieveType = <T extends AchievementType>(props: RecoilState<T>) => UseAchieveReturnType<T>;
export declare const useAchieve: UseAchieveType;
