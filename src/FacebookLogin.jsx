import { useState } from "react";

export default function InstagramLogin() {
  const [data, setData] = useState(null);
  
  async function authorize() {

    // try {
    //   const response = await fetch(`https://api.instagram.com/oauth/authorize?client_id=953981329433359&redirect_uri=https://instalogin-1.onrender.com/&scope=user_profile,user_media&response_type=code`, {
    //     // No need to set 'mode' to 'no-cors'
    //     mode:'no-cors'
    //   });
    //   const responseData = await response.json();
    //   setData(responseData);
    //   console.log(responseData);
    // } catch (error) {
    //   console.error('Error occurred:', error);
    // }
  }

  return (
    <>
      <button  onClick={authorize}><a href="https://api.instagram.com/oauth/authorize?client_id=953981329433359&redirect_uri=https://instalogin-1.onrender.com/&scope=user_profile,user_media&response_type=code">Login to Instagram</a></button>
      {/* Display response data if available */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}