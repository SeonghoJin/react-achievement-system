// @flow
import * as React from 'react';
import {AchievementType} from "../core/useAchievementSystemStore";
import {useCallback, useEffect, useState} from "react";
import {useAchievementViewQueue} from "./useAchievementViewQueue";
import {AchievementComponent} from "./AchievementComponent";

type Props = {
    achievements: AchievementType,
    time: number
};

export const AchievementViewer = ({achievements, time}: Props) => {

    const [beforeState, setBeforeState] = useState(achievements);
    const {insertAchieve, currentAchieveName} = useAchievementViewQueue();

    const getChangeAchieves = useCallback(() => {
        const changeAchieves = [];

        for(let achieveName in achievements){
            if(
                beforeState[achieveName] === false &&
                achievements[achieveName] === true
            ) {
                changeAchieves.push(achieveName);
            }
        }

        return changeAchieves
    }, [achievements]);

    useEffect(() => {
        const changeAchieves = getChangeAchieves();
        if(changeAchieves.length > 0){
            insertAchieve(changeAchieves);
            setBeforeState(achievements);
        }
    }, [getChangeAchieves]);

    return (<>
        {(currentAchieveName && <AchievementComponent achievement={currentAchieveName} time={time}/>)}
        </>
    );
};
