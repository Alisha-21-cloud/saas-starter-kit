import { Error, Loading } from '@/components/shared';
import { TeamTab } from '@/components/team';
import useTeam from 'hooks/useTeam';
import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next/pages';
import { serverSideTranslations } from 'next-i18next/pages/serverSideTranslations';
import { toast } from 'react-hot-toast';
import env from '@/lib/env';
import dynamic from 'next/dynamic';

// TODO: Remove ssr:false when @boxyhq/react-ui ships React 19 SSR support
// Last checked: 2026-06-13, version 3.5.3
// Functional impact: SSO and Directory Sync wrappers render client-side only
const DirectoriesWrapper = dynamic(
  () => import('@boxyhq/react-ui/dsync').then((mod) => mod.DirectoriesWrapper),
  { ssr: false }
);
import { BOXYHQ_UI_CSS } from '@/components/styles';

const DirectorySync = ({ teamFeatures }) => {
  const { isLoading, isError, team } = useTeam();
  const { t } = useTranslation('common');

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }

  if (!team) {
    return <Error message={t('team-not-found')} />;
  }

  return (
    <>
      <TeamTab
        activeTab="directory-sync"
        team={team}
        teamFeatures={teamFeatures}
      />
      <DirectoriesWrapper
        classNames={BOXYHQ_UI_CSS}
        componentProps={{
          directoryList: {
            cols: ['name', 'type', 'status', 'actions'],
            hideViewAction: true,
          },
          createDirectory: {
            excludeFields: [
              'product',
              'tenant',
              'webhook_secret',
              'webhook_url',
              'log_webhook_events',
            ],
            disableGoogleProvider: true,
          },
          editDirectory: {
            excludeFields: [
              'webhook_url',
              'webhook_secret',
              'log_webhook_events',
            ],
          },
        }}
        urls={{
          get: `/api/teams/${team.slug}/dsync`,
          post: `/api/teams/${team.slug}/dsync`,
          patch: `/api/teams/${team.slug}/dsync`,
          delete: `/api/teams/${team.slug}/dsync`,
        }}
        successCallback={({ operation }) => {
          if (operation === 'CREATE') {
            toast.success(`Connection created successfully.`);
          } else if (operation === 'UPDATE') {
            toast.success(`Connection updated successfully.`);
          } else if (operation === 'DELETE') {
            toast.success(`Connection deleted successfully.`);
          } else if (operation === 'COPY') {
            toast.success(`Contents copied to clipboard`);
          }
        }}
        errorCallback={(errMessage) => toast.error(errMessage)}
      />
    </>
  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  if (!env.teamFeatures.dsync) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
      teamFeatures: env.teamFeatures,
    },
  };
}

export default DirectorySync;
