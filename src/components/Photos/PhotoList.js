import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import PhotoCard from './PhotoCard'

const getPhotos = graphql`
query {
	photos: allContentfulPhotos {
    edges{
        node {
            id: contentful_id
            name
            slug
            description
            images{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
}
}
`;

const PhotoList = () => {
    const { photos } = useStaticQuery(getPhotos);
    return (
        <section className={styles.tours}>
            <Title title="hampi" subtitle="photos" />
            <p className={styles.subText}><span>Royalty free</span> photos of Hampi</p>
            <div className={styles.center}>
                {photos.edges.map(({ node }) => {
                    return <PhotoCard key={node.id} photo={node} />
                })}
            </div>
        </section>
    )
}
export default PhotoList;
