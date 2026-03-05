import React, { ReactNode, useState } from "react";

import ImageComponent from "./UI/ImageComponent";

import Image from "../models/image";
import ProfilePic from '../assets/images/ap.jpg';
import ModalComponent from "./UI/ModalComponent";




const AboutPage : React.FC = () => {

    const [modalData, setModalData] = useState<ReactNode>(null);
    const [currentModalSize, setCurrentModalSize] = useState<string>("modal-lg");

    const enlargePicture = () => {
        setModalData(<ImageComponent id="img-profile-pic" src={ProfilePic} name="Anjan Pandey" style={{"width": "400px", "height":"400px"}} />)
    }

    const closeEnlargedPicture = () => {
        setModalData(null);
    }

    const resizeModal = () => {
        if (currentModalSize === "modal-fullscreen") {
            // minimize 
        setCurrentModalSize("modal-lg");
        document.getElementById("img-profile-pic")?.style.setProperty("height", "400px");
         document.getElementById("img-profile-pic")?.style.setProperty("width", "400px");
        }
        else {
         setCurrentModalSize("modal-fullscreen");
         document.getElementById("img-profile-pic")?.style.setProperty("height", "700px");
         document.getElementById("img-profile-pic")?.style.setProperty("width", "700px");
        }
    }

        // define elements 
    const image : Image =  {id: "img-ap", name: "Anjan Pandey", src: ProfilePic, onClick: enlargePicture, style: {maxHeight:"550px", maxWidth:"350px", width:"100%", height:"auto", borderRadius:"50%", position: "relative", "cursor": "pointer"}};
    const context = "Founder & CEO @ healcovery | Proactive Care Coordination | Population Health | Value-Based Care | Human-Centered Design | Patient Advocate | Ethical AI";
    // const icons: ReadonlyArray<Icon> = [{id: "icn-linkedin", title: "Visit my LinkedIn", styleClasses: "m-1", href: "https://www.linkedin.com/in/anjan-pandey"}, {id: "icn-github", title: "Visit My Github", styleClasses: "m-1", href: "https://github.com/anjanpandey"}];

    
    const sites = [{"name": "Linkedin", "url": "https://www.linkedin.com/in/anjan-pandey"}, {"name": "X", "url": "https://www.x.com/theanjanpandey"}, {"name": "Github", "url": "https://github.com/anjanpandey"}]


    const picModal = <ModalComponent id="about-id-modal" 
                                    modalTitle="Anjan Pandey"
                                    modalSize={currentModalSize}
                                    allowScrolling={false}
                                    isCentered={false}
                                    isDraggable={false}
                                    isLeftModal={false}
                                    isRightModal={false}
                                    onModalResize={resizeModal}
                                    onModalClose={closeEnlargedPicture}
                                    style={{"display": "block"}}>            
                          <div className="text-center">{modalData}</div> 
                        </ModalComponent>


    return (
        <>
        {modalData ? picModal : ""}
        <div className="flex text-center border p-5 rounded">
            <ImageComponent id={image.id} src={image.src} onClick={image.onClick} name={image.name} style={image.style} />
            <p className="mt-2"><b>{context}</b></p>
            <p className="mt-2">{sites.map(site => <a key={site.name} href={site.url} target="_blank" rel="noreferrer" className="btn btn-light me-2" style={{"textDecoration": "none"}}>{site.name}</a>)}</p>
        </div>
        </>

    );
}


export default AboutPage;