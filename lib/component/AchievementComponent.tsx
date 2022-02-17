import * as React from 'react';

type Props = {
    achievement: string;
    time: number
}

export const AchievementComponent = ({achievement}: Props) => {
    return <div>{achievement}달성!</div>
};
