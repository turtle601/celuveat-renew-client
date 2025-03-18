import { usePreventClickOnDrag } from '../../../shared/hooks';
import ProfileImage from '../../../shared/ui/profileImage';

interface CelebProfileProps {
  name: string;
  profileImageUrl: string;
}

function Profile({ name, profileImageUrl }: CelebProfileProps) {
  // const navigate = useNavigate();

  const registerProps = usePreventClickOnDrag({
    fn: () => {
      // click Action
    },
  });

  return (
    <div {...registerProps}>
      <ProfileImage name={name} imageUrl={profileImageUrl} size={'64px'} />
      <span>{name}</span>
    </div>
  );
}

export default Profile;
