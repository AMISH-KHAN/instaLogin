import { useState } from "react";

export default function InstagramLogin() {
  const [data, setData] = useState(null);
  
  async function authorize() {
    try {
      const response = await fetch(`https://graph.instagram.com/v19.0/953981329433359/`, {
        // No need to set 'mode' to 'no-cors'
      });
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }

  return (
    <>
      <button onClick={authorize}>Login to Instagram</button>
      {/* Display response data if available */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}