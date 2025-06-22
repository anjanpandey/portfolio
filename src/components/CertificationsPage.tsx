import CardComponent from "./UI/CardComponent";
// import images 
import StanfordPMImg from "../assets/images/stanford_pm_c.png";
import PythonDSImg from "../assets/images/python_ds.png";

// import models
import Card from "../models/card";
import Image from "../models/image";
import Button from "../models/button";
import { newTabIcon, openItemInANewTab } from "../store/constants";


const CertificationsPage : React.FC = () => {

    // cert img url
    const stanfordCertImgURL: string = "https://digitalcredential.stanford.edu/check/4EB7DDAA389FEBFDB3CA6445984092C866A686F7D276F9447FB3E2F38E938196dU5nazJySmxmZmEzQ2J4RVkySWcwTndyQTZCWEFmUEtYNTJXUVVxUDg5UHl4YVNF"; 

    // define card images
    const cardImgStyle = {maxHeight:"650px", maxWidth:"500px", width:"100%", height:"auto"};
    const stanfordImage : Image = {id: "img-stanford-pm-certifications", name: "Stanford PM Certification", src: StanfordPMImg, onClick: () => openItemInANewTab(stanfordCertImgURL), style: {...cardImgStyle, cursor:"pointer"}};
    // const safeImage: Image = {id: "img-safe-pm-certification", name: "SAFe PM/PO Certification", src: SafePMImg, onClick: undefined, style: cardImgStyle};
    const pythonDSImage: Image = {id: "img-python-ds-certification", name: "Python Data Strcutures", src: PythonDSImg, onClick: undefined, style: cardImgStyle};
    const learnMoreStanfordCertProgramURL : string = "https://online.stanford.edu/programs/product-management-program";
    // const viewInCredlyURL: string = "https://www.credly.com/users/anjanpandey/badges";
    const learnMorePythonDSCertProgramURL: string = "https://www.coursera.org/account/accomplishments/verify/RH4UAHR4K72H";



    // buttons 
    const learnMoreStanfordButton:  Button = {id: "btn-learn-more-stanford-pm-program", name: "learn More", onClick: () => openItemInANewTab(learnMoreStanfordCertProgramURL) , classes: "btn btn-danger m-1", btnIcon: newTabIcon, style: {cursor:"pointer"}};
    // const viewInCredlyButton:  Button = {id: "btn-view-in-credly", name: "View In Credly", onClick: () => openItemInANewTab(viewInCredlyURL), classes: "btn btn-warning m-1", btnIcon: newTabIcon, style: {cursor:"pointer"}};
    const learnMorePythonDSButton:  Button = {id: "btn-learn-more-python-ds-cert", name: "learn More", onClick: () => openItemInANewTab(learnMorePythonDSCertProgramURL), classes: "btn btn-primary m-1", btnIcon: newTabIcon, style: {cursor:"pointer"}};

    // define card 
    const cardStyle: React.CSSProperties = {minWidth:"300px", maxWidth:"530px", maxHeight:"970px", margin:"1em"};
    const stanfordPMCert : Card = {id: "card-cert-stanford", img: stanfordImage, cardTitle: "Stanford Product Management Program", cardContent: "", classes: "col", style: cardStyle, badges: [], buttons: [learnMoreStanfordButton]};
    // const safePMCert: Card = {id: "card-cert-safe", img: safeImage, cardTitle: "SAFe Product Manager/Owner", cardContent: "", classes: "col", style: cardStyle, badges: [], buttons: [viewInCredlyButton]};
    const pythonDSCert: Card = {id: "card-cert-python-ds", img: pythonDSImage, cardTitle: "Python Data Structures", cardContent: "", classes: "col", style: cardStyle, badges: [], buttons: [learnMorePythonDSButton]};

    // add your card here to render below
    const cards : ReadonlyArray<Card> = [stanfordPMCert, pythonDSCert];


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
                                                                    buttons={card.buttons} />)) : "You don't have any certifications."}
        </div>
    );
}

export default CertificationsPage;