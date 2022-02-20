import * as React from 'react';
import styled, {keyframes} from "styled-components";
export type AchievementComponentProps = {
    achievement: string;
    time: number
}
export type AchievementComponentType = (props: AchievementComponentProps) => JSX.Element;

const AchievementComponentAnimation = keyframes`
    0% {
      transform: translateX(-500px);
    }
  
    20% {
      transform: translateX(0px);
    }
  
    80% {
      transform: translateX(0px);
    }
  
    100% {
      transform: translateX(-500px);
    }
`

const AchievementComponentContainer = styled.div`
    position: fixed;
    bottom: 24px;
    left: 24px;
    right: auto;
    margin : auto;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    font-weight: 400;
    font-size: 0.875rem;
    display: flex;
    border-radius: 13px;
    align-items: center;
    justify-content: flex-end;
    padding: 6px 16px;
    animation-name: ${AchievementComponentAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
};
`

const AchievementComponentBody = styled.div`
    flex-grow: initial;
    min-width: 288px;
    padding: 8px 0px;
`

export const AchievementComponent : AchievementComponentType =
    ({achievement}: AchievementComponentProps) => {

    return <AchievementComponentContainer>
        <AchievementComponentBody>
            🎉  {achievement}달성!
        </AchievementComponentBody>
    </AchievementComponentContainer>;
};
