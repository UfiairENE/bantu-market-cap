import React, { useEffect } from "react";
import { AppContainer, Main } from "./AppStyle";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CurrencyList } from "./pages/CurrencyList/CurrencyList";
import axios from "axios";


const App = () => {
  useEffect(()=>{
  
    let ip:string
    let browser
        axios.get('https://ipinfo.io/json?token=77be3c38e20609').then((res)=>{
        
        // CHROME
    if (navigator.userAgent.indexOf("Chrome") !== -1 ) {
      browser ="Google Chrome"
    }
    // FIREFOX
    else if (navigator.userAgent.indexOf("Firefox") !== -1 ) {
      browser ="Mozilla Firefox"
    }
    // INTERNET EXPLORER
    else if (navigator.userAgent.indexOf("MSIE") !== -1 ) {
      browser ="Internet Exploder"
    }
    // EDGE
    else if (navigator.userAgent.indexOf("Edge") !== -1 ) {
      browser ="Internet Explorer"
    }
    // SAFARI
    else if (navigator.userAgent.indexOf("Safari") !== -1 ) {
      browser ="Safari"
    }
    // OPERA
    else if (navigator.userAgent.indexOf("Opera") !== -1 ) {
      browser ="Opera"
    }
    // YANDEX BROWSER
    else if (navigator.userAgent.indexOf("YaBrowser") !== -1 ) {
      browser ="YaBrowser"
    }
    // OTHERS
    else {
      browser ="Others"
    }
    let location = res.data.loc.split(',')
      
            axios({
              method: 'POST',
              url: 'https://bantu.hopto.org/add',
              data: {
                ip_address: res.data.ip,
                device_info:  navigator.platform,
                browser_type: browser,
        longitude: location[1],
        latitude: location[0],
        city: res.data.city,
        country: res.data.country,
       
        
      
                  }
          }).then((res)=>{
              console.log(res)
            }).catch((err)=>{
              console.log(err)
            })
        }).catch((err)=>{
          console.log(err)
        })
    
    },[])
  return (
    <AppContainer>
      <Header />
      <Main>
        <CurrencyList />
      </Main>
      <Footer />
    </AppContainer>
  );
};

export {App};

