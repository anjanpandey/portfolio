
import CardComponent from "./UI/CardComponent";

// import images 
import BillingImg from "../assets/images/billing.png";
import PatientPortalImg from "../assets/images/pp.png";
import ContactPortalImg from "../assets/images/cp.png";
import SeamlessImg from "../assets/images/st.png";
import PayorAuditsImg from "../assets/images/ad.jpg";

// import models
import Card from "../models/card";
import Image from "../models/image";
import Button from "../models/button";

// import badges  
import {launchedBadge, completedBadge, ensemble, ascension, sigmund} from "../store/constants";
import { newTabIcon, openItemInANewTab } from "../store/constants";


const ProductPage : React.FC = () => {

    // define card images
    const cardImgStyle = {maxHeight:"650px", maxWidth:"500px", width:"100%", height:"auto"};
    const payorAuditsImage : Image = {id: "img-ehp-payor-audits", name: "OIG Payor Audits", src: PayorAuditsImg, onClick: undefined, style: cardImgStyle};
    const billingImage: Image = {id: "img-ehp-billing", name: "Billing Discovery", src: BillingImg, onClick: undefined, style: cardImgStyle};
    const seamlessImage: Image = {id: "img-ascension-seamless", name: "Seamless Transition", src: SeamlessImg, onClick: undefined, style: cardImgStyle};
    const patientPortalImage : Image = {id: "img-sigmund-patient-portal", name: "Patient Portal", src: PatientPortalImg, onClick: undefined, style: cardImgStyle};
    const contactPortalImage : Image = {id: "img-sigmund-contact-portal", name: "Contact Portal", src: ContactPortalImg, onClick: undefined, style: cardImgStyle};
    
    // patient portal url
    const patientPortalVideoURL: string = 'https://drive.google.com/file/d/17RRl3qnzrV3_F3WLPYXBnoIbcLUp7ZX3/view';
    // button 
    const patientPortalButton:  Button = {id: "btn-view-video", name: "View Video", onClick: () => openItemInANewTab(patientPortalVideoURL), classes: "btn btn-primary m-1", btnIcon: newTabIcon, style: {}};


    // define card 
    const cardStyle: React.CSSProperties = {minWidth:"350px", maxWidth:"530px", maxHeight:"970px", margin:"1em"};
    const payorAuditsCard : Card = {id: "card-ehp-payor-audits", img: payorAuditsImage, cardTitle: "Payor Audits", cardContent: "Launched the 'Payor Audits' module in EIQ, allowing audit nurses to track and respond to payor (government and commercial) audits in a timely manner.", classes: "col", style: cardStyle, badges: [launchedBadge, ensemble], buttons: []};
    const billingCard: Card = {id: "card-ehp-billing", img: billingImage, cardTitle: "Billing Discovery", cardContent: "Conducted billing discovery for unbilled management and edits enhancement utilizing quantitative (advanced analytics) and qualitative (user persona interview) methods.", classes: "col", style: cardStyle, badges: [completedBadge, ensemble], buttons: []};
    const seamlessCard: Card = {id: "card-ascension-seamless", img: seamlessImage, cardTitle: "Seamless Transition - Interoperability", cardContent: "Seamless Transitions is a SMART on FHIR web app that allows case managers to view true PCP for a patient and schedule a follow-up or discharge appointment to reduce the readmission rate at Ascension's hospitals.", classes: "col", style: cardStyle, badges: [launchedBadge, ascension], buttons: []};
    const patientPortalCard: Card = {id: "card-sigmund-patient-portal",img: patientPortalImage,cardTitle:  "Patient Portal Mobile App", cardContent: "Patient Portal app allows patients going through behavioral treatment to view their appointments, vitals, treatment plans, etc. It is a one-stop shop for documenting and viewing health data for patients.", classes: "col", style: cardStyle, badges: [launchedBadge, sigmund], buttons: [patientPortalButton]};
    const contactPortalCard: Card = {id: "card-sigmund-contact-portal", img: contactPortalImage, cardTitle: "Contact Portal Web App", cardContent: "Contact Portal allows patients' contacts and outside providers to access patient health data securely.", classes: "col", style: cardStyle, badges: [launchedBadge, sigmund], buttons: []};
    
    // add your card here to render below
    const cards : ReadonlyArray<Card> = [payorAuditsCard, billingCard, seamlessCard, patientPortalCard, contactPortalCard];

    return ( 
        <div className="row">
              {cards.length > 0 ? cards.map(card => (<CardComponent id={card.id} 
                                                                    key={card.id}
                                                                    img={card.img} 
                                                                    cardTitle={card.cardTitle} 
                                                                    cardContent={card.cardContent} 
                                                                    classes={card.classes} 
                                                                    style={card.style}
                                                                    badges={card.badges}
                                                                    buttons={card.buttons} />)) : "You haven't worked on any products."}
        </div>
    );
}


export default ProductPage;