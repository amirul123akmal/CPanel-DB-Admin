import React from 'react'
import AdminHome from './AdminHome'
import ManageUser from './AdminManageUser';

function Admin(props) {

  const type = props['getPage'];
  
  switch (type) {
    case 1:
      return (<AdminHome/>);
    
    case 2:
      return (<div>Manage Database</div>);

    case 3:
      return (<ManageUser/>);
  }
}

export default Admin