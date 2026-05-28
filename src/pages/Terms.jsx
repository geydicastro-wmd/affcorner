import { Helmet } from "react-helmet-async";
import InternalHeader from "../components/common/InternalHeader";
import useTermsContent from "../content/hooks/useTermsContent";

const defaultHelmet = {
  title: "Terms and Conditions | AffCorner",
  description: "Read the AffCorner terms and conditions.",
  ogTitle: "Terms and Conditions | AffCorner",
  ogDescription: "Read the AffCorner terms and conditions.",
  ogType: "website",
};

export default function Terms() {
  const { content, helmet, loading, renderHtml } = useTermsContent(
    "Terms and Conditions",
    { defaultHelmet },
  );

  return (
    <div>
      <Helmet>
        <title>{helmet.title}</title>
        <meta name="description" content={helmet.description} />
        {helmet.keywords && (
          <meta name="keywords" content={helmet.keywords} />
        )}
        <meta property="og:title" content={helmet.ogTitle} />
        <meta property="og:description" content={helmet.ogDescription} />
        <meta property="og:type" content={helmet.ogType} />
        {helmet.ogImage && (
          <meta property="og:image" content={helmet.ogImage} />
        )}
        {helmet.canonical && (
          <link rel="canonical" href={helmet.canonical} />
        )}
        {helmet.robots && <meta name="robots" content={helmet.robots} />}
        {helmet.twitterTitle && (
          <meta name="twitter:title" content={helmet.twitterTitle} />
        )}
        {helmet.twitterDescription && (
          <meta
            name="twitter:description"
            content={helmet.twitterDescription}
          />
        )}
        {helmet.twitterImage && (
          <meta name="twitter:image" content={helmet.twitterImage} />
        )}
      </Helmet>
      <InternalHeader title="Terms and Conditions" />
      <main className="terms-page">
        <div className="container py-5">
          {loading && <p>Loading...</p>}
          {!loading && content && (
            <div dangerouslySetInnerHTML={renderHtml(content)} />
          )}
        </div>
      </main>
    </div>
  );
}
