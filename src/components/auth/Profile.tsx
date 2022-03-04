export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h3>{name} Private Profile Component.</h3>
    </div>
  );
};

export default Profile;
