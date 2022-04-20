import {useCallback, useEffect, useState} from "react";
import {AchievementType} from "../core/useAchievementSystemStore";

export const useAchievementViewQueue = () => {

    const [achieveNames, setAchieveNames] = useState<(keyof AchievementType)[]>([]);
    const [showing, setShowing] = useState(false);
    const [currentAchieveName, setCurrentAchieveName] = useState<null | string>(null);

    useEffect(() => {
       if(achieveNames.length <= 0){
           setCurrentAchieveName(null);
           return;
       }
       if(showing)return;
       setShowing(true);
       setCurrentAchieveName(achieveNames[0] ?? null);
       setTimeout(() => {
           pop();
       }, 3000)
   
    }, [achieveNames, showing]);

    const pop = useCallback(() => {
        setAchieveNames((prev) => {
            const nextState = [...prev];
            nextState.shift();
            setShowing(false);
            return nextState;
        });
    }, [])

    const insertAchieve = useCallback((achieveName: string | string []) => {
        setAchieveNames((prev) => prev.concat(achieveName))
    }, []);

    return {
        insertAchieve,
        currentAchieveName,
    };
};
