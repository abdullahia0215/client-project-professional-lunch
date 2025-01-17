import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import { DataGrid } from '@mui/x-data-grid';
import MenteeGrid from './MenteeGrid';

export default function MenteeList() {
  const dispatch = useDispatch();

  const profiles = useSelector((store) => store.adminProfiles);
  console.log('Profiles', profiles);

  const mentees = profiles.filter((profile) => !profile.isMentor);
  console.log('Mentees', mentees);
  const [stripe, setStripe] = useState('odd');

  useEffect(() => {
    dispatch({ type: 'FETCH_ADMIN_PROFILES' });
  }, []);

  return (
    <>
      {/* <Sheet>
        <Table stripe={stripe}>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Last Name</th>
              <th style={{ width: '10%' }}>First Name</th>
              <th style={{ width: '15%' }}>Email</th>
              <th style={{ width: '15%' }}>School</th>
              <th style={{ width: '15%' }}>LinkedIn</th>
              <th style={{ width: '20%' }}>Bio</th>
              <th style={{ width: '20%' }}>Availability</th>
              <th style={{ width: '20%' }}>Interests</th>
            </tr>
          </thead>
          <tbody>
            {mentees.map((mentee) => (
              <tr key={mentee.id}>
                <td>{mentee.last_name}</td>
                <td>{mentee.first_name}</td>
                <td>{mentee.email}</td>
                <td>{mentee.school}</td>
                <td>{!mentee.linkedin ? 'No Profile' : <a href={mentee.linkedin}>Go to Profile</a>}</td>
                <td>{mentee.bio}</td>
                <td>{mentee.availability}</td>
                <td>{mentee.interests}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet> */}
      <MenteeGrid />
    </>
  );
}
