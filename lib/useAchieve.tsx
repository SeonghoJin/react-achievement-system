import {RecoilState, useRecoilState} from "recoil";
import {useCallback} from "react";
import {AchievementType} from "~core/useAchievementSystemStore";

export type AchievementAction<T> = (achieveName: keyof T) => void;
export type UseAchieveReturnType<T> = {
    achieve: AchievementAction<T>
}
export type UseAchieveType = <T extends AchievementType>(props: RecoilState<T>) => UseAchieveReturnType<T>;
export const useAchieve : UseAchieveType  = (store) => {

    const [achievementStore, setAchievementStore] = useRecoilState(store);

    const achieve: AchievementAction<typeof achievementStore> = useCallback((achieveName) => {
        setAchievementStore((cur) => ({
            ...cur,
            [achieveName]: true
        }));
    }, []);

    return {achieve}
};
