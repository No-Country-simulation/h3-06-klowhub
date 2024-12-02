import { getProfile } from '@/_lib/actions/profile.actions';

const Profile = async () => {
  const res = await getProfile();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>{JSON.stringify(res)}</p>
    </div>
  );
};

export default Profile;
