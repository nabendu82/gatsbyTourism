import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query{
    site{
        siteMetadata {
            siteTitle: title
            siteDesc: description
            author
            siteUrl
            image
            twitterUsername
        }
    }
}
`;

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(getData);
    const { siteTitle, siteDesc, siteUrl, image, twitterUsername } = site.siteMetadata;
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDesc} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDesc} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
        </Helmet>
        )
}

export default SEO
