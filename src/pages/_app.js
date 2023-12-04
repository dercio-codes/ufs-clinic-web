import React from "react";
import '@/styles/globals.css'
import ChatBot from 'react-simple-chatbot';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  const [loaded , setLoaded] = React.useState(false)

  React.useEffect(()=>{
    AOS.init();
    setLoaded(true)

  },[])

const steps = [
  {
    id: '0',
    message: 'Welcome to our chatbot! How can I help you today?',
    trigger: '1',
},
{
    id: '1',
    message: 'May I ask how old you are?',
    trigger: 'age',
},
{
    id: 'age',
    message: 'Thank you for sharing your age. Where are you located?',
    trigger: 'location',
},
{
    id: 'location',
    message: 'Great! And finally, could you tell me what kind of sickness you are experiencing?',
    trigger: 'end',
},
 {
    id: 'end',
    message: 'Thank you for participating in this!',
    end: true,
  },
];



  return loaded &&(
<div>
     <Component {...pageProps} />
</div>
    )
}

// <div style={{ position:'fixed' , right:'0' , bottom:'32px' }} >
//    <ChatBot steps={steps} />
// </div>