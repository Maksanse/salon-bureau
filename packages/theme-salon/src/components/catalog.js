import React, {useEffect, useState} from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"
import {useMediaQuery} from "react-responsive";
import Link from "@frontity/components/link";
import SyncLoader from "react-spinners/SyncLoader"
import Breadcrumb from './shared/breadcrumb'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";



const Catalog = ({ state, libraries }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch posts
                const response = await libraries.source.api.get({
                    endpoint: "posts",
                    params: {
                        per_page: 100,
                        page: 1
                    }
                });
                const entitiesAdded = await libraries.source.populate({ response, state });

                const mediaIds = entitiesAdded
                    .filter(({ type }) => type === "post")
                    .map(({ id }) => state.source.post[id].featured_media)
                    .filter((id) => id); // Filtrer les IDs valides

                if (mediaIds.length > 0) {
                    const mediaResponse = await libraries.source.api.get({
                        endpoint: "media",
                        params: {
                            include: mediaIds.join(','),
                            per_page: 100,
                            page: 1,
                        },
                    });
                    await libraries.source.populate({ response: mediaResponse, state });
                }

                const categoriesResponse = await libraries.source.api.get({
                    endpoint: "categories",
                    params: {
                        per_page: 100,
                        page: 1,
                    },
                });
                await libraries.source.populate({ response: categoriesResponse, state });

                setLoading(false);
            } catch (error) {
                console.error("Error fetching posts or media:", error);
            }
        };

        fetchPosts();
    }, []);

    const allPosts = Object.values(state.source.post);

    const categories = state.source.category;
    const postsByCategory = {};

    allPosts.forEach((post) => {
        post.categories.forEach((catId) => {
            if (!postsByCategory[catId]) {
                postsByCategory[catId] = [];
            }
            postsByCategory[catId].push(post);
        });
    });

    return (
        <Container>
            <Breadcrumb/>

            {loading ? (
                <Loading>
                    <SyncLoader color="#000" />
                </Loading>
            ) : (
                Object.keys(postsByCategory).map((catId) => {
                    const category = categories[catId];
                    const posts = postsByCategory[catId];

                    return (
                        <CategorySection key={catId}>

                            <hr/>
                            <CategoryLink link={category.link}>

                                <CategoryTitle><FontAwesomeIcon icon={faChevronRight} /> {category.name}</CategoryTitle>
                            </CategoryLink>
                            <PostList>
                                {posts.map((post) => {
                                    const attachment = post.featured_media ? state.source.attachment[post.featured_media] : null;
                                    const imageUrl = attachment ? attachment.source_url : "";

                                    return (
                                        <PostLink link={post.link}>
                                            <Card key={post.id}>
                                                <PostImage src={imageUrl} alt={post.title.rendered} />
                                                <PostTitle>
                                                    <span>{post.title.rendered}</span>
                                                </PostTitle>
                                            </Card>
                                        </PostLink>
                                    );
                                })}
                            </PostList>
                        </CategorySection>
                    );
                })
            )}
        </Container>
    );
};

export default connect(Catalog);

const Container = styled.div`

  display: flex;
  flex-flow: row wrap;

  margin-left: auto;
  margin-right: auto;
  
`;

const Card = styled.div`
  display:flex;
  flex-flow: column nowrap;
    justify-content: space-between; /* S'assure que l'image et le titre sont bien séparés */

  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  
  width: 350px;
  height: 300px;
  overflow: hidden;
  background-color: #fff;

`;


const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 240px; /* Hauteur fixe pour l'image */
  flex-shrink: 0; /* Empêche l'image de se rétrécir */

`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centre le texte horizontalement */
  flex-shrink: 0; /* Empêche le titre de se rétrécir */
  height: 10px; /* Hauteur fixe du titre */
  padding: 1em;
  
  span {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 300;
    text-align: center;
    white-space: nowrap; 
   }
  
`;

const PostLink = styled(Link)`
  
    text-decoration: none;
    cursor: pointer;
    color: black;
    
    
    &:hover {
      opacity: .6;
    }
    
    
`;

const CategorySection = styled.div`
    margin: 2rem;
`;

const CategoryTitle = styled.h2`
  color: #333;
  margin: 2rem;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 200;
`;

const PostList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
`;

const CategoryLink = styled(Link)`
   text-decoration: none;
    cursor: pointer;
    color: black;
    
    
    &:hover {
      opacity: .5;
    }
    
`;

const Loading = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateY(50%);
`;