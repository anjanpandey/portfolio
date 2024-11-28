import { PropsWithChildren } from "react";
import Badge from "./badge";



interface Timeline extends PropsWithChildren {
    id: string;
    timelineTitle: string;
    timelineBadge: Badge;
    timelineContent: string;
}

export default Timeline;