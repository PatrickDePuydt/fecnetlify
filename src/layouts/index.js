import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Front-End Careers — A newsletter for your web development journey"
      meta={[
        { name: "viewport", content: "width=device-width, minimum-scale=1, initial-scale=1" },
        { name: "copyright", content: "Copyright (c) 2018 Front End Careers" },
        { name: "language", content: "English (United States), en-US" },
        { name: "keywords", content: "front-end, front end development, become a developer, javascript developer, web dev, web developer career, web dev jobs, web developer jobs, web developer, tech jobs" },
        { name: "googlebot-news", content: "index" },
        { name: "twitter:title", content: "Front End Careers — A newsletter for your web development journey" },
        { name: "twitter:image", content: "/assets/images/BoltLogo.svg" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:description", content: "Want a career in web development? Between technical skills, soft skills, interviews and code challenges, it isn't easy. We can help." },
        { name: "fb_title", content: "Front End Careers" },
        { itemprop: "description", name: "description", content: "Want a career in web development? Between technical skills, soft skills, interviews and code challenges, it isn't easy. We can help." },
        { property: "og:url", content: "http://frontendcareers.website" },
        { property: "og:title", content: "Front End Careers — A newsletter for your web development journey" },
        { itemprop: "image", property: "og:image", content: "http://frontendcareers.surge.sh/assets/images/BoltLogo.svg" },
        { property: "og:description", content: "Want a career in web development? Between technical skills, soft skills, interviews and code challenges, it isn't easy. We can help." },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: "frontendcareers.com" },
        { property: "og:type", content: "WebPage" }
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Nunito:300,400|Signika:400,700', rel: 'stylesheet'},
        { rel: "canonical", href: "http://frontendcareers.website" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 650,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
