    import Badge from "../models/badge";
    
    // constant badges that can be exported in all pages 
    const badgeStyle: React.CSSProperties = {textWrap: "wrap"};
    export const inProgressBadge : Badge = {id: "badge-in-progress", innerText: "In Progress", classes: "badge bg-primary m-1", title: "In Progress", style: badgeStyle}; 
    export const launchedBadge: Badge = {id: "badge-launched", innerText: "Launched", classes: "badge bg-success m-1", title: "Launched", style: badgeStyle}; 
    export const sigmund:  Badge = {id: "badge-sigmund-software", innerText: "Sigmund Software", classes: "badge bg-warning text-dark m-1", title: "Sigmund Software", style:badgeStyle};
    export const ascension:  Badge = {id: "badge-ascension", innerText: "Ascension", classes: "badge bg-info m-1", title: "Ascension", style: badgeStyle};
    export const ensemble:  Badge = {id: "badge-ensemble-hp", innerText: "Ensemble Health Partners", classes: "badge bg-success m-1", title: "Ensemble Health Partners", style: badgeStyle};
    export const ulm: Badge =  {id: "badge-ulm", innerText: "University of Louisiana Monroe", classes: "badge bg-danger text-warning m-1", title: "University of Louisiana Monroe", style: badgeStyle};
    export const stanford: Badge = {id: "badge-stanford", innerText: "Stanford University Professional Program", classes: "badge bg-danger m-1", title: "Stanford University Professional Program", style: badgeStyle};