import React, { useRef, useState } from "react"
import styles from './Settings.module.scss'

import BackArrow from '@resources/feathericons/arrow-left.svg'
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
// import ReaderTheme from "./pages/ReaderTheme"
import GlobalTheme from "./pages/GlobalTheme"
import Fonts from "./pages/Fonts/Fonts"
import { useAppSelector } from "@store/hooks"
import TitleBarButtons from "@shared/components/TitleBarButtons"

const Settings = ()=>{
  const navigate = useNavigate()
  const location = useLocation()

  let mobileTitle = location.pathname
  const subpaths = mobileTitle.split('/')
  
  if (subpaths.length == 2){
    mobileTitle = "Settings"
  }else{
    mobileTitle = subpaths[2]
  }

  return (
    <div className={styles.settingsPageContainer}>
      <div data-tauri-drag-region className={styles.titleBar}>

        {/* This is the titlebar for desktop screens */}
        <div onClick={()=> navigate("/")} className={styles.backButtonContainer + " " + styles.hidesm}>
          <BackArrow/>
        </div>
        <div className={styles.titleText  + " " + styles.hidesm}>Settings</div>


        {/* This is the titlebar for mobile screens */}
        <div onClick={()=> mobileTitle=="Settings"? navigate("/"): navigate("/settings")} className={styles.backButtonContainer + " " + styles.hidegtsm}>
          <BackArrow/>
        </div>
        <div className={styles.titleText  + " " + styles.hidegtsm}>{mobileTitle.replace("%20", " ")}</div>
        <div className={styles.titleBarButtonsContainer}>
          <TitleBarButtons/>

        </div>
      </div>

      <div  className={`${mobileTitle!="Settings"?styles.navbarActive:""} ${styles.responsiveSettingsGrid}`}>
        <div className={styles.navbar}>
          <div onClick={()=>navigate("Themes")}>Themes</div>
          {/* <div onClick={()=>navigate("Reader Theme")}>Reader Theme</div> */}
          <div onClick={()=>navigate("Fonts")}>Fonts</div>
        </div>

        <div className={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<GlobalTheme />} />
            <Route  path="/Themes" element={<GlobalTheme />} />
            {/* <Route path="/Reader Theme" element={<ReaderTheme />} /> */}
            <Route path="/Fonts" element={<Fonts />} />
          </Routes>
        </div>
      </div>

    </div>

  )
}


export default Settings