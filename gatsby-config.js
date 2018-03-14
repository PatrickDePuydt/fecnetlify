module.exports = {
    siteMetadata: {
        title: "Gatsby Default Starter"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-75248916-1",
                head: false,
                anonymize: true
            }
        },
        {
            resolve: "gatsby-plugin-favicon",
            options: {
                logo: "./src/favicon.png",
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts/`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                excerpt_seperator: "<!-- END -->"
            }
        }
    ]
};
