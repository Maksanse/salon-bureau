import React, { useEffect} from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Category = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link);


    useEffect(() => {
        const fetchCategoryAndPosts = async () => {

            const categorySlug = data.route.split("/").filter(Boolean).pop();

            const response = await libraries.source.api.get({
                endpoint: "categories",
                params: { slug: categorySlug },
            });

            const entitiesAdded = await libraries.source.populate({ response, state });
            const category = entitiesAdded[0];
            const categoryId = category.id;

            const postsResponse = await libraries.source.api.get({
                endpoint: "posts",
                params: {
                    categories: categoryId,
                    per_page: 100,
                    page: 1,
                },
            });

            const postsEntitiesAdded = await libraries.source.populate({
                response: postsResponse,
                state,
            });

            const mediaIds = postsEntitiesAdded
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

        };


        fetchCategoryAndPosts();

    }, []);
    const postByCategory = Object.values(state.source.post);
    const postCategories = state.source.category;


    return (
        Object.keys(postByCategory).map((catId) => {
        const postCategory = postCategories[catId];
        const postByCategoryId = postByCategory[catId];


            return(
        <div>
            <h1>{postCategory.name}</h1>

            <PostList>
                {postByCategoryId.map((post) => {
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
                    )
                })}
            </PostList>
        </div>
        );
    }));







};

export default connect(Category);

const PostList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  
  width: 400px;
  height: 350px;
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


// const Container = styled.div`
//   padding: 20px;
// `;
//
// const Posts = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
// `;
//
// const Post = styled.div`
//   width: 300px;
//   padding: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;