import { AchievementSystemOptions } from "./AchievementSystem";
import { ReactElement } from "react";
import { AchievementType } from "./useAchievementSystemStore";
export declare type AchievementSystemRootType = <T extends AchievementType>(options: AchievementSystemOptions<T>) => ReactElement;
export declare const AchievementSystemRoot: AchievementSystemRootType;
