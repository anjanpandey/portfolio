import { PropsWithChildren } from "react";
import Badge from "./badge";


interface TimelineLink {
    name:string;
    url:string;
}

interface Timeline extends PropsWithChildren {
    id: string;
    timelineTitle: string;
    timelineBadge: Badge;
    timelineContent: string;
    timelineLink:TimelineLink;
}

export default Timeline;