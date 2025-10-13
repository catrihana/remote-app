// pages/_error.tsx
import { NextPage, NextPageContext } from 'next';

type Props = {
  statusCode?: number;
};

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 500;
  return { statusCode };
};

export default ErrorPage;
