import {RecoilState, useRecoilState} from "recoil";

export type AchievementType = Record<string, boolean>;
export type UseAchievementSystemStoreReturnType<T> = {
    achievementStore: T,
}
export type AchievementSystemStoreType = <T extends AchievementType>(props: RecoilState<T>) => UseAchievementSystemStoreReturnType<T>;

export const useAchievementSystemStore : AchievementSystemStoreType = (props) => {
    const [achievementStore] = useRecoilState(props);
    return {achievementStore};
}

