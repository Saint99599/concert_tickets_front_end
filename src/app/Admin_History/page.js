import Cookies from 'js-cookie';

export default function Admin_History() {
  
    const gettoken = Cookies.get('token');
    console.log("gettoken Admin_History",gettoken)

    return (
      <>
        <p>Admin_History</p>
      </>
    )
  }
  