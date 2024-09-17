import React, { useEffect} from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Breadcrumb from '../components/shared/breadcrumb';


const Category = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link);
 
    
    useEffect(() => {
        const fetchCategoryAndPosts = async () => {

            const categorySlug = data.route.split("/").filter(Boolean).pop();

            const response = await libraries.source.api.get({
                endpoint: "categories",
                params: { slug: categorySlug },
            });

            const entitiesAdded = await libraries.source.populate({
                response,
                state,
            });
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
    const categorySlug = data.route.split("/").filter(Boolean).pop();
    const category = Object.values(state.source.category).find(
        (cat) => cat.slug === categorySlug
    );

    if (!category) return <div>Chargement de la catégorie...</div>;

    const posts = Object.values(state.source.post).filter((post) =>
        post.categories.includes(category.id)
    );


    return (
        <>
        <Breadcrumb/>
        <Container>

            <CategoryTitle>{category.name}</CategoryTitle>

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
                    )
                })}
            </PostList>
        </Container>
        </>
        );







};

export default connect(Category);

const Container = styled.div`

  display: flex;
  flex-flow: row wrap;

  margin-left: 2rem;
  margin-right: auto;
  
`;


const PostList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
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

const PostLink = styled(Link)`
  
    text-decoration: none;
    cursor: pointer;
    color: black;
    
    
    &:hover {
      opacity: .6;
    }
    
    
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


const CategoryTitle = styled.h1`
  color: #333;
  margin: 2rem;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 200;
`;


const BreadcrumbContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    
`;