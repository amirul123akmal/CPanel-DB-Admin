import React, {useState, useEffect }from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function AdminManageUser() {

    const [users, setUsers] = useState([]);

    const accessAPI =  async () => {
        // function accessAPI() {
        const url = global.config.endpoint + '/getAllUser';
        try {
            const response = await axios.post(url, '');
            if(response['data']['transmission'] === 'success')
            {
                let count = response['data']['count'];
                for (let index = 1; index <= count; index++) {
                    if(typeof response['data'][index] !== 'undefined')
                    {
                        let row = response['data'][index];
                        setUsers(prevState => [...users, {
                            id: Number(row['user_id']),
                            username: row['user'],
                            password: row['pass'],
                            role: row['status'],
                            database: row['data_loc']
                        }]);
                    }
                }
                console.log(users);
            }
            // else 
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(() => {
        accessAPI();
      }, []);

    return (
    <TableContainer component={Paper}>
      <Table aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Password (Encrypted)</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Database</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.database}</TableCell>
              <TableCell align="right">
                <EditIcon />
              </TableCell>
              <TableCell align="right">
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminManageUser