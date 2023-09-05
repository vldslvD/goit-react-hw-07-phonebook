import axios from 'axios';

axios.defaults.baseURL =
  'https://64f2d792edfa0459f6c60a49.mockapi.io/phonebook';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['accept'] = 'application/json';
// const options = {
//   headers: {
//     accept: 'application/json',
//   },
export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
