import { ProductImg, LeftSideDiv, RightSideDiv, BannerDiv, FullDiv, ProductContainer } from '../components/post';


export const productimg = {
    name: "post productimg element",
    priority: 10,
    test: ({ node }) =>
        node.type === "element" &&
        node.component === "div" &&
        node.props?.className?.split(" ").includes("product-img"),
    processor: ({ node }) => {
        node.component = ProductImg
        return node;
    }

}

export const leftdiv = {
    name: "post leftdiv element",
    priority: 10,
    test: ({ node }) =>
        node.type === "element" &&
        node.component === "div" &&
        node.props?.className?.split(" ").includes("left-side"),
    processor: ({ node }) => {
        node.component = LeftSideDiv
        return node;
    }
}

export const rightdiv = {
    name: "post rightdiv element",
    priority: 10,
    test: ({ node }) =>
        node.type === "element" &&
        node.component === "div" &&
        node.props?.className?.split(" ").includes("right-side"),
    processor: ({ node }) => {
        node.component = RightSideDiv
        return node;
    }
}

export const banner = {
    name: "post banner element",
    priority: 10,
    test: ({ node }) =>
        node.type === "element" &&
        node.component === "div" &&
        node.props?.className?.split(" ").includes("banner"),
    processor: ({ node }) => {
        node.component = BannerDiv
        return node;
    }
}


export const productcontainer = {
    name: "post product container element",
    priority: 10,
    test: ({ node }) =>
        node.type === "element" &&
        node.component === "div" &&
        node.props?.className?.split(" ").includes("product-container"),
    processor: ({ node }) => {
        node.component = ProductContainer
        return node;
    }
}

export const fulldiv = {
    name: "post fulldiv element",
    priority: 10,
    test: ({ node }) =>
        node.type === "element" &&
        node.component === "div" &&
        node.props?.className?.split(" ").includes("full-div"),
    processor: ({ node }) => {
        node.component = FullDiv
        return node;
    }
}



export default [productimg, leftdiv, rightdiv, banner, fulldiv, productcontainer];

