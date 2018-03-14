// Dependencies
import React, {Component} from "react";
import Link from "gatsby-link";
import PostListing from "../components/Posts";

const TestGround = ({data}) =>  (
    <div>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <PostListing key={node.id} post={node}/>
        ))}
    </div>
);


export default TestGround;

export const query = graphql`
    query SiteMeta {
        site {
            siteMetadata {
                title                
            } #siteMetadata
        } #/site

       allMarkdownRemark {
        edges {
            node {
            id
            html
            excerpt

            fields {
                slug
            }
            
            frontmatter {
                title
                date(formatString: "MM-DD-YYY")
                }  # /frontmatter

            } #/node

        } #/edges

    } #/allMarkdownRemark

} #/query SiteMeta
`;