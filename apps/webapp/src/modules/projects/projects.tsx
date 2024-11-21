import React from 'react';

import { AppLayout } from 'common/layouts/app-layout';
import { ContentBox } from 'common/layouts/content-box';
import { MainLayout } from 'common/layouts/main-layout';
import { SCOPES } from 'common/scopes';
import { withApplicationStore } from 'common/wrappers/with-application-store';

import { useScope } from 'hooks';

import { Header } from './header';
import { ProjectsList } from './projects-list';

export const Projects = withApplicationStore(() => {
  useScope(SCOPES.AllIssues);

  return (
    <MainLayout header={<Header title="Projects" />}>
      <ContentBox>
        <ProjectsList />
      </ContentBox>
    </MainLayout>
  );
});

Projects.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};