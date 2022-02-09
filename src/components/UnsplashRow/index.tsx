import Card from '@/components/Card';
import Row from '@/components/Row';
import Camera from '@/public/icons/camera.svg';
import Download from '@/public/icons/download.svg';
import Eye from '@/public/icons/eye.svg';
import format from '@/utils/format';

type Props = {
  unsplashData: UnsplashData;
};

const UnsplashRow: React.FC<Props> = ({ unsplashData }) => (
  <Row>
    <Card
      title="Total Views"
      value={format(unsplashData.views.total)}
      Icon={Eye}
    />
    <Card
      title="Total Downloads"
      value={format(unsplashData.downloads.total)}
      Icon={Download}
    />
    <Card
      title="Total Photos"
      value={format(unsplashData.total_photos)}
      Icon={Camera}
    />
  </Row>
);

export default UnsplashRow;
