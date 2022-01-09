import Card from '@/components/Card';
import Row from '@/components/Row';
import Git from '@/public/icons/git-commit.svg';
import Star from '@/public/icons/star.svg';
import User from '@/public/icons/user.svg';
import format from '@/utils/format';

type Props = {
  githubData: GitHubData;
};

const GitHubRow: React.FC<Props> = ({ githubData }) => (
  <Row>
    <Card
      title="Total Stars Earned"
      value={format(
        githubData.repos
          .map((repo) => repo.stargazers_count)
          .reduce((acc, val) => acc + val),
      )}
      Icon={Star}
    />
    <Card
      title="Total Repositries"
      value={format(githubData.user.public_repos)}
      Icon={Git}
    />
    <Card
      title="Total Followers"
      value={format(githubData.user.followers)}
      Icon={User}
    />
  </Row>
);

export default GitHubRow;
