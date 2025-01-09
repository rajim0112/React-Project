import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Crud= () => {
  const [users,setUsers] = useState([]);
  const [formData,setFormData] = useState({name: '', job: ''});
  const [userId,setUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users`);
      setUsers(res.data.data);
    } catch (err) {
      console.error('Error Fetching Users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://reqres.in/api/users`,formData);
      console.log('Created User:', res.data);
      setUsers([...users, res.data]);
      setFormData({name: '', job: ''});
    } catch (err) {
      console.error('Error Creating Users:', err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!userId) return;
    try {
      const res = await axios.put(`https://reqres.in/api/users/${userId}`);
      console.log('Updated User:', res.data);
      setUsers(users.map((user) => (user.id === userId ? res.data : user)));
      setFormData({name: '', job: ''});
      setUserId(null);
    } catch (err) {
      console.error('Error Updating Users:', err);
    }
  };

  const handleDelete= async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      console.log('User deleted:', id);
      setUsers(users.filter((user) => user.id !==id));
    } catch (err) {
      console.error('Error Deleting Users:', err);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value});
  };

  return (
    <div>
      <h1>Crud Operations</h1>
      <form onSubmit = {userId ? handleUpdate : handleCreate}>
        <input
          type = "text"
          name = "name"
          placeholder = "Name"
          value = {formData.name}
          onChange = {handleChange}
        />
        <input
          type = "text"
          name = "job"
          placeholder = "Job"
          value = {formData.job}
          onChange = {handleChange}
        />
        <button type = "submit">{userId ? 'Update User' : 'Create User'}</button>
      </form>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key = {user.id}>
            {user.first_name} {user.last_name} - {user.email}
            <button onClick={() => {
              setUserId(user.id);
              setFormData({name: user.first_name, job: ''});
            }}>
              Edit
            </button>
            <button onClick = {() => {
              handleDelete(user.id)
            }}>
                Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Crud