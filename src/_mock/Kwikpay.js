const API = process.env.REACT_APP_API;

export const AllTcResponse=async(startDate,endDate)=> {
    try {
        const data={
            startDate,
            endDate
        }
        const headers = new Headers({
           "Content-type":"application/json"
           
        });
  
        const response = await fetch(`${API}/kwikpay/getTcResponse`, { method: 'POST', headers ,body:JSON.stringify(data)});
        const json = await response.json();
        // console.log(json)
        return json.data;
      } catch (error) {
        console.error('Error fetching data:', error);
    
        return [];
      }
}

