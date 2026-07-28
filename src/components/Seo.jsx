import { Helmet } from "react-helmet-async";

const SITE_NAME = "Aisyah Mahla Nurussalamah";
const DEFAULT_DESCRIPTION =
  "Event Coordination & Public Relations professional based in Bandung, West Java — delivering seamless, high-impact events.";

export default function Seo({ title, description = DEFAULT_DESCRIPTION }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Event Coordination & PR`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
