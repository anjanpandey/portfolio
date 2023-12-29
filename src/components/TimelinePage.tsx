import timelineClasses from "../style/UI/Timeline.module.css";
import Timeline from "../models/timeline";
import TimelineComponent from "./UI/TimelineComponent";

// import badges  
import {ulm, sigmund, ascension, stanford, ensemble} from "../store/constants";

const TimelinePage : React.FC = () => {
    // define timeline 
    const ensembleTimeline: Timeline = {id: "timeline-ehp", timelineTitle: "June 2023 - Current", timelineBadge: ensemble, timelineContent: "Joined Ensemble as a Senior Technical Product Manager."};
    const stanfordTimeline: Timeline = {id: "timeline-stanford", timelineTitle: "February 2023 - February 2024", timelineBadge: stanford, timelineContent: "Joined professional certification program in Product Management."};
    const ascensionTimeline: Timeline = {id: "timeline-ascension", timelineTitle:  "December 2022 - May 2023", timelineBadge: ascension, timelineContent: "Joined Ascension as a Product Manager in Clinical Experience department."};
    const sigmundTimeline: Timeline = {id: "timeline-sigmund", timelineTitle: "July 2017 - August 2022", timelineBadge: sigmund, timelineContent: "Joined Sigmund as a Software Engineer and left as a Product Manager."};
    const ulmTimeline: Timeline = {id: "timeline-ulm", timelineTitle: "August 2013 - May 2017", timelineBadge: ulm, timelineContent: "Joined ULM as an undergraduate student to study Computer Science and Mathematics."};

    // add your card here to render below
    const timelineCards : ReadonlyArray<Timeline> = [ensembleTimeline, stanfordTimeline, ascensionTimeline, sigmundTimeline, ulmTimeline];

    return (
        <div className={timelineClasses.outer}>
            {timelineCards.length > 0 ? timelineCards.map(timelineCard => (<TimelineComponent id={timelineCard.id} 
                                                                                            timelineTitle={timelineCard.timelineTitle} 
                                                                                            timelineBadge={timelineCard.timelineBadge} 
                                                                                            timelineContent={timelineCard.timelineContent}
                                                                                            key={timelineCard.id}
                                                    />)) : "Your timeline is empty."}
        </div>
    );
}


export default TimelinePage;