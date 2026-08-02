import Badge from "./badge";


type TimelineLink = {
    name:string;
    url:string;
}

type Timeline = {
    id: string;
    timelineTitle: string;
    timelineBadge: Badge;
    timelineContent: string;
    timelineLink:TimelineLink;
}

export default Timeline;