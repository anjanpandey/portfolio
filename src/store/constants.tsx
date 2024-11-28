    import Badge from "../models/badge";
    import Icon from "../models/icon";
    
    // constant badges that can be exported in all pages 
    const badgeStyle: React.CSSProperties = {textWrap: "wrap"};
    export const inProgressBadge : Badge = {id: "badge-in-progress", innerText: "In Progress", classes: "badge bg-primary m-1", title: "In Progress", style: badgeStyle}; 
    export const launchedBadge: Badge = {id: "badge-launched", innerText: "Launched", classes: "badge bg-success m-1", title: "Launched", style: badgeStyle}; 
    export const completedBadge: Badge = {id: "badge-completed", innerText: "Completed", classes: "badge bg-primary m-1", title: "Completed", style: badgeStyle}; 
    export const ut : Badge = {id: "badge-ut-austin", innerText: "The University of Texas at Austin", classes: "badge bg-warning text-light m-1", title: "The University of Texas at Austin", style:badgeStyle};
    export const sigmund:  Badge = {id: "badge-sigmund-software", innerText: "Sigmund Software", classes: "badge bg-warning text-dark m-1", title: "Sigmund Software", style:badgeStyle};
    export const ascension:  Badge = {id: "badge-ascension", innerText: "Ascension Healthcare", classes: "badge bg-info m-1", title: "Ascension", style: badgeStyle};
    export const ensemble:  Badge = {id: "badge-ensemble-hp", innerText: "Ensemble Health Partners", classes: "badge bg-success m-1", title: "Ensemble Health Partners", style: badgeStyle};
    export const cumberlands: Badge =  {id: "badge-cumberlands", innerText: "University of the Cumberlands", classes: "badge bg-danger text-light m-1", title: "University of the Cumberlands", style: badgeStyle};
    export const ulm: Badge =  {id: "badge-ulm", innerText: "University of Louisiana Monroe (ULM)", classes: "badge bg-danger text-warning m-1", title: "University of Louisiana Monroe", style: badgeStyle};
    export const stanford: Badge = {id: "badge-stanford", innerText: "Stanford University Professional Program", classes: "badge bg-danger m-1", title: "Stanford University Professional Program", style: badgeStyle};
    export const lsbdc: Badge = {id: "badge-lasbdc", innerText: "Louisiana Small Business Development Center (LSBDC)", classes: "badge bg-danger m-1", title: "Louisiana Small Business Development Center", style: badgeStyle};
    export const startup: Badge = {id: "badge-startup", innerText: "Startup and Lean", classes: "badge bg-info m-1", title: "Startup and Lean", style: badgeStyle};
    export const healcovery: Badge = {id: "badge-healcovery", innerText: "healcovery", classes: "badge bg-success m-1", title: "healcovery", style: badgeStyle};

    // pages
    export const enum Page {
        About = "about",
        Certifications = "certifications",
        ContactMe = "contactme",
        Products = "products",
        Projects = "projects",
        Timeline = "timeline"
    };

    // themes
    export const enum Theme {
        Dark = "dark",
        Light = "light"
    }

    // theme colors
    export const enum Color {
        DarkModePrimaryColor =  "#eeeeee",
        DarkModePrimaryBackground = "#232931", 
        LightModePrimaryColor = "#222222",
        LightModePrimaryBackground = "#ffffff"
    }

    // -- NEW TAB 
    // icon 
    export const newTabIcon: Icon = {id: "icn-new-tab", title: "View in a new tab", styleClasses: "fa-solid fa-up-right-from-square me-1", href: ""};
    // opens an item in a new tab
    export const openItemInANewTab = (itemURL: string) => {
        window.open(itemURL, '_blank');
    }