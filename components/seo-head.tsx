import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export function SEOHead({
  title = "Portfolio | Crafting Tomorrow's Digital Experiences",
  description = "Innovative Developer Specializing in Cutting-Edge Technologies - React, Three.js, WebGL, GSAP",
  keywords = "portfolio, developer, React, Three.js, WebGL, GSAP, frontend, fullstack, web development",
  ogImage = "/og-image.png",
  canonicalUrl = "https://portfolio.dev",
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Portfolio Developer" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Portfolio Developer",
            jobTitle: "Full Stack Developer",
            description: description,
            url: canonicalUrl,
            sameAs: [
              "https://github.com/portfolio",
              "https://linkedin.com/in/portfolio",
              "https://twitter.com/portfolio",
            ],
          }),
        }}
      />
    </Head>
  )
}
