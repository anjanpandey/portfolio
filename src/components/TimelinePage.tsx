import timelineClasses from "../style/UI/Timeline.module.css";
import Timeline from "../models/timeline";
import TimelineComponent from "./UI/TimelineComponent";

// import badges  
import {lsbdc, ulm, sigmund, ascension, stanford, ensemble, cumberlands, startup, projectHealthcare, healcovery} from "../store/constants";

const TimelinePage : React.FC = () => {
    // define timeline 
    const healcoveryTimeline: Timeline = {id: "timeline-healcovery", timelineTitle: "August 2024 - Present", timelineBadge: healcovery, timelineContent: "We are building a conversational AI, Casey, for hospital and health systems to reduce avoidable ED utilization and costs through proactive care coordination.", timelineLink: {name:"Visit healcovery", url:"https://www.healcovery.ai/"}};
    const projectHealthcareTimeline: Timeline = {id: "timeline-project-healthcare", timelineTitle: "March 2025 - May 2025", timelineBadge: projectHealthcare , timelineContent: "Learned healthcare sales, marketing, and relationship building, and met with many amazing people.", timelineLink: {name:"Visit Project Healthcare 2025", url:"https://ec.co/2025/02/24/project-healthcare-accelerator-welcomes-2025-spring-cohort/"}};
    const startupTimeline: Timeline = {id: "timeline-startup", timelineTitle: "March 2024 - July 2024", timelineBadge: startup, timelineContent: "Explored startup ideas, conducting market analysis, meeting people, etc.", timelineLink: {name:"", url:""}};
    const stanfordTimeline: Timeline = {id: "timeline-stanford", timelineTitle: "February 2023 - April 2024", timelineBadge: stanford, timelineContent: "I joined this program to hone my product management skills. The program has six courses, two required, and four electives. The course covered topics like product strategy, user research, demand creation, growth, financials, and marketing. I am thankful to Ascension Healthcare for reimbursing the cost of the course. ", timelineLink: {name:"", url:""}};
    const ensembleTimeline: Timeline = {id: "timeline-ehp", timelineTitle: "June 2023 - February 2024", timelineBadge: ensemble, timelineContent: "I was a Senior Product Manager at Ensemble Health Partners, a revenue cycle management company. I led the quantitative and qualitative research of the billing process at Ensemble, working with UX designers for user interviews and the principal product manager for data analysis. I created a product roadmap for the Billing team to prepare for the 2025 billing initiative. I also worked with the compliance/audit team to launch the MVP of the 'Payer Audits' module. The module allowed the team to track and respond to government and commercial audits. I launched the MVP in VCU Health. Overall, I learned about revenue cycle management and the claims lifecycle at Ensemble. ", timelineLink: {name:"", url:""}};
    const ascensionTimeline: Timeline = {id: "timeline-ascension", timelineTitle:  "December 2022 - May 2023", timelineBadge: ascension, timelineContent: "I joined Ascension Healthcare as a full-time product manager in their clinical experience department. I led a SMART on FHIR app called Seamless Transitions, working with three developers, business analysts, senior leaders, tech teams from Cerner and Athena, data analysts, clinical informatics, and project managers. I followed the SAFe, agile process and expanded the product roadmap to add several features by conducting discovery, refinement, and alignment meetings. I launched the product MVP at Ascension Seton Center in Austin, TX. Overall, I learned about value-based care and product management at Ascension. ", timelineLink: {name:"", url:""}};
    const cumberlandsTimeline: Timeline = {id: "timeline-cumberlands", timelineTitle:  "August 2020 - May 2022", timelineBadge: cumberlands, timelineContent: "I completed Master's in Information Technology Management taking leadership, operations management, and IT classes.", timelineLink: {name:"", url:""}};
    const sigmundTimeline: Timeline = {id: "timeline-sigmund", timelineTitle: "july 2017 - August 2022", timelineBadge: sigmund, timelineContent: "I joined Sigmund Software as a Software Engineer. I built several modules for the enterprise website called Aura. I was a full-stack developer and used .NET, C#, JavaScript, HTML/CSS, SQL, JSON, and XML. I leveraged several APIs like Google, Graph, and WebEx/Cisco to build a telehealth meeting platform. I also got to work on the first iteration of the patient portal mobile app. I am incredibly thankful for my Sigmund experience as I grew tremendously there. I also got to learn about US healthcare, behavioral health, EHR/EMR, and HIPAA.", timelineLink: {name:"", url:""}};
    const ulmTimeline: Timeline = {id: "timeline-ulm", timelineTitle: "August 2013 - May 2017", timelineBadge: ulm, timelineContent: "I joined ULM as a Computer Science major and minored in Math. I was actively involved in the Student Government Association (SGA) and provided supplemental instruction for Physics, helping students finish their assignments and prepare for tests. I also participated in extracurricular activities like singing, dancing, planning campus events, etc.", timelineLink: {name:"", url:""}};
    const sbdcTimeline: Timeline = {id: "timeline-sbdc", timelineTitle: "September 2016 - May 2017", timelineBadge: lsbdc, timelineContent: "I interned at LSBDC for just over eight months. Several small businesses in Northeast Louisiana were coming to LSBDC seeking help to have an online presence for their business. I met with several clients to gather their website requirements. One of the websites that I worked on is TechBy20.", timelineLink: {name:"", url:""}};
   

    // add your card here to render below
    const timelineCards : ReadonlyArray<Timeline> = [healcoveryTimeline, projectHealthcareTimeline, startupTimeline, stanfordTimeline, ensembleTimeline, ascensionTimeline, cumberlandsTimeline, sigmundTimeline, sbdcTimeline, ulmTimeline];

    return (
        <div className={timelineClasses.outer}>
            {timelineCards.length > 0 ? timelineCards.map(timelineCard => (<TimelineComponent id={timelineCard.id} 
                                                                                            timelineTitle={timelineCard.timelineTitle} 
                                                                                            timelineBadge={timelineCard.timelineBadge} 
                                                                                            timelineContent={timelineCard.timelineContent}
                                                                                            key={timelineCard.id}
                                                                                            timelineLink={timelineCard.timelineLink}
                                                                                            
                                                    />)) : "Your timeline is empty."}
        </div>
    );
}


export default TimelinePage;