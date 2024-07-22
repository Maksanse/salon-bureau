import React, {useEffect, useState} from "react"
import { connect, styled } from "frontity"
import {InView} from "react-intersection-observer"
import {useMediaQuery} from "react-responsive";
import Link from "@frontity/components/link";
import SyncLoader from "react-spinners/SyncLoader"


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
                            <CategoryTitle>{category.name}</CategoryTitle>
                            <PostList>
                                {posts.map((post) => {
                                    const attachment = post.featured_media ? state.source.attachment[post.featured_media] : null;
                                    const imageUrl = attachment ? attachment.source_url : "";

                                    return (
                                        <Card key={post.id}>
                                            <PostLink>
                                                <Link link={post.link}>
                                                    <PostImage src={imageUrl} alt={post.title.rendered} />
                                                    <span>{post.title.rendered}</span>
                                                </Link>
                                            </PostLink>
                                        </Card>
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
  margin-left: auto;
  margin-right: auto;
  
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  
  width: 400px;
  height: 300px;
  background-color: #fff;
`;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  background-image: linear-gradient(to bottom, transparent, rgba(255, 255, 255, .99));
`;

const PostLink = styled.div`
  a {
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 0;
    text-align: center;
    color: #000;
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      opacity: .1;
    }
    
    span {
       margin: 1em;
       font-size: 1.5em;
       font-weight: 300;
    }
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

const Loading = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateY(50%);
`;