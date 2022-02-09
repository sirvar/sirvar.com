import Card from '@/components/Card';
import Row from '@/components/Row';
import Chart from '@/public/icons/chart.svg';
import Globe from '@/public/icons/globe.svg';
import MapPin from '@/public/icons/map-pin.svg';
import format from '@/utils/format';

const AROUND_THE_WORLD = 40075;

type Props = {
  locationData: LocationData;
  travelData: TravelData;
};

const TravelRow: React.FC<Props> = ({ locationData, travelData }) => (
  <Row>
    <Card title="Currently In" value={locationData.location} Icon={MapPin} />
    <Card
      title="Countries Visited"
      value={travelData.countries.length}
      Icon={Globe}
    />
    <Card
      title="Distance Travelled"
      value={`${format(travelData.distance)} km`}
      tooltip={`${(travelData.distance / AROUND_THE_WORLD).toFixed(
        1,
      )}x around the world`}
      Icon={Chart}
    />
  </Row>
);

export default TravelRow;
