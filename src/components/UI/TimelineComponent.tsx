import React from "react";
import Timeline from "../../models/timeline";
import Badge from "../../models/badge";
import classes from "../../style/UI/Timeline.module.css";
import BadgeComponent from "./BadgeComponent";


const TimelineComponent: React.FC<Timeline> = (props) => {

    // define a badge
    const badge : Badge = {
                            id: props.timelineBadge.id, 
                            innerText: props.timelineBadge.innerText, 
                            classes: props.timelineBadge.classes, 
                            title: props.timelineBadge.title,
                            style: props.timelineBadge.style 
                        };

    return (
        <div id={props.id} className={classes.timelineCard}>
            <div className={classes.timelineInfo}>
                <h2 id={`title-${props.id}`} className={classes.timelineTitle}>
                    <b>{props.timelineTitle}</b>
                </h2>
                <BadgeComponent id={badge.id} innerText={badge.innerText} classes={badge.classes} title={badge.title} style={badge.style} />
                <p id={`content-${props.id}`}>{props.timelineContent}</p>
            </div>
        </div>
    );
}


export default TimelineComponent;