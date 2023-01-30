import { useEffect, useState } from "react";
import getPosts from "../../requests/getPosts";
import Card from "../Card/Card";
import Product from "../../types/product";
import Dropdown from "../Dropdown/Dropdown";
import Category from "../../types/category";
import { ActionMeta, SingleValue } from "react-select";
import "./Home.scss";
import Paginate from "../Paginate/Paginate";
import NoContent from "../NoContent";
import React from "react";

/*
 *  This is the Home component. It holds the state for the articles and category, and renders both the dropdown and articles
 */

const Home = () => {
    const [posts, setPosts] = useState<Product[]>([]);

    const options: Category[] = [
        { value: "all", label: "All Content Types" },
        { value: "articles", label: "Articles" },
        { value: "news", label: "News" },
    ];
    const [selectedContentType, setSelectedContentType] = useState(options[0]);
    const [paginationInfo, setPaginationInfo] = useState({
        activePage: 0,
        itemOffset: 0,
    });
    const articlesPerPage = 12;
    const endOffset = paginationInfo.itemOffset + articlesPerPage;

    const handlePageChange = (event: {
        activePage: number;
        itemOffset: number;
    }) => {
        setPaginationInfo({
            activePage: event.activePage,
            itemOffset: event.itemOffset,
        });
    };

    const handleCategoryChange = (
        newCategory: SingleValue<Category>,
        actionMeta: ActionMeta<Category>
    ) => {
        if (newCategory) {
            setSelectedContentType(newCategory);
        }
    };

    useEffect(() => {
        getPosts(setPosts);
    }, []);

    const filtered = posts.filter(
        (post) =>
            selectedContentType.value == "all" ||
            post.category.value == selectedContentType.value
    );

    return (
        <div className="Main">
            <div className="u-fixed-width filter-bar">
                <Dropdown
                    handleChange={handleCategoryChange}
                    options={options}
                    selectedContentType={selectedContentType}
                />
            </div>
            <div className="row">
                {posts && filtered.length > 0 ? (
                    filtered
                        .slice(
                            paginationInfo.activePage * articlesPerPage,
                            endOffset
                        )
                        .map((post) => <Card {...post} key={post.id} />)
                ) : (
                    <NoContent />
                )}
            </div>
            <div className=".u-fixed-width">
                {filtered.length > articlesPerPage ? (
                    <Paginate
                        handleChange={handlePageChange}
                        articlesPerPage={12}
                        totalArticleCount={posts.length}
                        posts={filtered}
                    />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Home;
