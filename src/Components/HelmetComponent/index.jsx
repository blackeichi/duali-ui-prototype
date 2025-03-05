import { Helmet } from "react-helmet";

export const HelmetComponent = ({ title }) => {
  return (
    <Helmet titleTemplate={`%s - 현대미포`}>
      <title>{title}</title>
      <meta name="description" content="DeMasterPro" />
    </Helmet>
  );
};
