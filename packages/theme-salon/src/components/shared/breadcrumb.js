import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = ({state}) => {


    const data = state.router.link;

    const segments = data.split('/').filter(segment => segment !== "");

    let url = '';
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const breadcrumbLinks = segments.map((segment, i) => {

        url += `/${segment}`;

        // Rechercher l'entité correspondante dans state.source
        const entity = Object.values(state.source)
            .flatMap((item) => Object.values(item))
            .find((item) => item.slug === segment);

        const name = entity
            ? entity.title?.rendered || capitalize(entity.name)
            : capitalize(decodeURIComponent(segment));

        return (

            <ColorDiv key={i}>
                {i > 0 && <Separator>/</Separator>}
                <BreadcrumbLink link={url}>
                    {name}
                </BreadcrumbLink>
            </ColorDiv>


        );
    });

    return (
        <BreadcrumbWrapper>
            <BreadcrumbLink link="/">
                <ColorDiv>
                    <FontAwesomeIcon icon={faHome}/>
                </ColorDiv>
            </BreadcrumbLink>
            {segments.length > 0 && <Separator>/</Separator>}
            {breadcrumbLinks}
        </BreadcrumbWrapper>
    );
};

export default connect(Breadcrumb)


const BreadcrumbWrapper = styled.nav`
  font-size: 14px;
  margin: 15px ;
`;

const BreadcrumbLink = styled(Link)`

  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 30px;
  background-color: rgb(217, 34, 40, 0.6);
  padding: 5px;
  &:hover {
    text-decoration: underline;
    opacity: .6;
  }
`;

const Separator = styled.span`
  margin: 0 5px;
  color: #999;
`;

const ColorDiv = styled.span`

`



