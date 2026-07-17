import Teachers from '../../components/Teachers/Teachers.jsx';
import PageLayout from '../../layouts/PageLayout.jsx';
import teamPageData from './teamPageData.js';

function TeamPage() {
  return (
    <PageLayout title="Instructors">
      <Teachers items={teamPageData} />
    </PageLayout>
  );
}

export default TeamPage;
