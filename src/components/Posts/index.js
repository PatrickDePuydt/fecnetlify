import React from "react";
import Link from "gatsby-link";

const PostListing = ({ post }) => (
    <article>
        <h1><Link to={post.fields.slug}>Post Listing</Link></h1>
        
    </article>
);

export default PostListing;
