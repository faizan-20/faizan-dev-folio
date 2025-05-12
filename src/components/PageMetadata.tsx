import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface PageMetadataProps {
  title: string;
  description?: string;
}

function PageMetadata({ title, description }: PageMetadataProps) {
  useEffect(() => {
    // Update favicon based on theme
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/favicon.svg";
    }
  }, []);

  return (
    <Helmet>
      <title>{title} | Faizan Ahmad</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Helmet>
  );
}

export default PageMetadata; 