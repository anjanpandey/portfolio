import {useState} from 'react';

import appClasses from './style/App.module.css';

import ProfileContainer from './components/ProfileContainer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ScrollUp from './components/ScrollUp';
import ProductPage from './components/ProductPage';
import TimelinePage from './components/TimelinePage';
import CertificationsPage from './components/CertificationsPage';
import Navbar from './components/Navbar';

import ThemeContextProvider from './store/theme-context';
import ThemeSwitcher from './components/ThemeSwitcher';
import ProjectPage from './components/ProjectPage';
import { Page } from './store/constants';

const App = () => {

  // get the active left tab from the session
  var activeBtn = sessionStorage.getItem("active-left-btn");

  // by default, set it to about
  if(activeBtn === undefined ||
        activeBtn === null || 
        activeBtn === "") {
      activeBtn = Page.About
    }

  // define is at the top
  // by default, we will always be at the top
  const [isAtTheTop, setIsAtTheTop] = useState(true);
  const [currentPage, setCurrentPage] = useState(activeBtn);

  window.addEventListener("scroll", function(){
    if(window.scrollY === 0){
        setIsAtTheTop(true);
        // console.log("top");
    } else {
        setIsAtTheTop(false);
        // console.log("bottom");
    }
});


  return (
    <ThemeContextProvider>
      <ProfileContainer>
        <ThemeSwitcher />
        <div className='row' style={{clear:'both'}}>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12" id="div-left-nav-container">
                <Navbar currentPage={currentPage} onNavChange={setCurrentPage} />
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12" id="div-right-nav-container">
              <div className={currentPage !== Page.Products &&
                              currentPage !== Page.Certifications ? `${appClasses.centered} ${appClasses.bordered}` : ``}>
                {currentPage === Page.Timeline? <TimelinePage /> :
                  currentPage === Page.Products ? <ProductPage /> : 
                  currentPage === Page.Projects ? <ProjectPage /> :
                  currentPage === Page.Certifications ?  <CertificationsPage /> :
                  currentPage === Page.ContactMe ?  <ContactPage /> : <AboutPage />}
              </div>
            </div>
        </div>
        {!isAtTheTop ? <ScrollUp /> : "" }
      </ProfileContainer>
    </ThemeContextProvider>
  );
}

export default App;
