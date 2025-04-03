

// import { store } from "../Redux/store";
// import { saveData } from "../Redux/action";

// const API = import.meta.env.VITE_REACT_SERVER_API;

export const AllMacAddress=async()=> {
  
    try {
      const headers = new Headers({
        'x-token': sessionStorage.getItem('token'),
      });

      const response = await fetch(`http://snackboss-iot.in:6000/kwikpay/getMacAddress`, { method: 'GET', headers });
      const json = await response.json();
      // console.log(json)
      return json.data;
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return [];
    }
  }

  export const getData=async()=> {
  
    try {
      const headers = new Headers({
        'x-token': sessionStorage.getItem('token'),
      });
      const city=JSON.parse(sessionStorage.getItem("cities"));

      const response = await fetch(`http://snackboss-iot.in:6000/kwikpay/getData?city=${city.join()}`, { method: 'GET', headers });
      const json = await response.json();

      // store.dispatch(saveData(json.data));
      // console.log(json)
      return json.data;
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return [];
    }
  }

  export const getTestMode=async()=> {
  
    try {
      const headers = new Headers({
        'x-token': sessionStorage.getItem('token'),
      });
      const response = await fetch(`http://snackboss-iot.in:6000/kwikpay/getTestMode`, { method: 'GET', headers });
      const json = await response.json();
      // console.log(json)
      return json.data;
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return [];
    }
  }

  export const setTestMode=()=>{
  
    fetch(`http://snackboss-iot.in:6000/kwikpay/setTestMode`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      }
    })
    
  
  }


  export const sendFota=(MacID,fota,port,name,type)=>{
    const obj={
      MacId:MacID,
      outPutValue:true,
      socketNumber:port,
      UserName:name,
      type
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendFota`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
    
  
  }
   
 export const sendReset=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      UserName:name,
      socketNumber:port,
      
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/reset`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  
  export const sendV=(MacID,Pin,Pulse,Port,name)=>{
    const obj={
      MacId:MacID,
      Pin,
      Pulse,
      socketNumber:Port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendV`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  
  export const sendFW=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      UserName:name,
      socketNumber:port
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendFW`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  
 export const sendTC=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      UserName:name,
      socketNumber:port
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendTC`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  
  export const sendTV=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      UserName:name,
      socketNumber:port
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendTV`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendFotaUrl=(MacID,url,port,name)=>{
    const obj={
      MacId:MacID,
      Url:url,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendFotaUrl`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const askUrl=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askUrl`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendCC=(MacID,port,name,UnixTS)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      UnixTS
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendCC`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const askCC=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askCC`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendQR=(MacID,port,name,QR)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      QR
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendQR`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const askQR=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askQR`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  export const sendIMG=(MacID,IMG,port,name)=>{
    const obj={
      MacId:MacID,
      IMG,
      socketNumber:port,
      UserName:name,
    
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendIMG`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
    
  
  }
  export const askStatus=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askStatus`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const setSN=(MacID,port,name,SN)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      SerialNumber:SN
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/setSN`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  export const sendMessage=(MacID,port,data)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      Message:data
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendMessage`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendPassThru=(MacID,port,name,SN)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      PassThru:SN
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendPassThru`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const checkPassThru=(MacID,port)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
    
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/checkPassThru`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const setErase=(MacID,port,name,SN)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      Erase:SN
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/setErase`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const setL=(MacID,port,name,SN)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      LNumber:SN
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/setL`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const checkErase=(MacID,port)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
    
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/checkErase`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  

  export const checkSN=(MacID,port)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
    
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/checkSN`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const setPair=(MacID,port,name,SN)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name,
      PairNumber:SN
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/setPair`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const checkPair=(MacID,port)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
    
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/checkPair`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  

  export const sendLight=(MacID,light,position,port,name)=>{
    const obj={
      MacId:MacID,
      light,
      position,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendLight`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendHBT=(MacID,value,port,name)=>{
    const obj={
      MacId:MacID,
      value,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendHBT`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendSIP=(MacID,ip,pin,port,name)=>{
    const obj={
      MacId:MacID,
      Ip:ip,
      Pin:pin,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendSIP`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendSSID=(MacID,SSID,port,name)=>{
    const obj={
      MacId:MacID,
      SSID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendSSID`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  export const askSSID=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
   
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askSSID`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  export const sendPWD=(MacID,PWD,port,name)=>{
    const obj={
      MacId:MacID,
      PWD,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendPWD`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendSSID1=(MacID,SSID1,port,name)=>{
    const obj={
      MacId:MacID,
      SSID1,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendSSID1`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }
  export const sendPWD1=(MacID,PWD1,port,name)=>{
    const obj={
      MacId:MacID,
      PWD1,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendPWD1`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const sendCA=(MacID,numValue,polarity,port,name)=>{
    const obj={
      MacId:MacID,
      numValue,
      polarity,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/sendCA`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const askCA=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askCA`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const askSIP=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/askSIP`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const modeTest1=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/modeTest1`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const modeTest2=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/modeTest2`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const modeTest3=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/modeTest3`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }

  export const modeNone=(MacID,port,name)=>{
    const obj={
      MacId:MacID,
      socketNumber:port,
      UserName:name
  
    }
    fetch(`http://snackboss-iot.in:6000/kwikpay/modeNone`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(obj)
    })
     
  
  }



  export const getAllOutputs=async()=> {
  
    try {
      const headers = new Headers({
        'x-token': sessionStorage.getItem('token'),
      });

      const response = await fetch(`http://snackboss-iot.in:6000/kwikpayTesting/getOutPuts`, { method: 'GET', headers });
      const json = await response.json();
      // console.log(json)
      return json.data;
    } catch (error) {
      console.error('Error fetching data:', error);
  
      return [];
    }
  }


  export const sendG1=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendG1`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendG2=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendG2`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }
  export const sendG3=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendG3`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendI=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendI`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendGF=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendGF`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendQ=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendQ`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendQ1=async(MacID,SN,name)=>{
    const obj={
      MacId:MacID,
      serialNumber:SN,
      UserName:name,
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/testingBoard/sendQ1`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendD=async(MacID,unixTS,port,name)=>{
    const obj={
     
      UnixTS:unixTS,
      MacId:MacID,
      socketNumber:port,
      UserName:name
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/kwikpay/sendD`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }

  export const sendVS=async(MacID,port,name)=>{
    const obj={
     
      
      MacId:MacID,
      socketNumber:port,
      UserName:name
      
  
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
      'x-token': sessionStorage.getItem('token'),
    });
    const response = await fetch(`http://snackboss-iot.in:6000/kwikpay/sendVS`, { method: 'POST', headers,body:JSON.stringify(obj) });
    const json = await response.json();
    // console.log(json)
    return json.data;
     
  
  }