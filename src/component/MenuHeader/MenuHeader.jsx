import React, {useEffect} from 'react';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllCategory} from "../../actions/categoryAction.js";
import {Link} from "react-router-dom";
import  './style.css'
const MenuHeader = () => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategory())
        // console.log('i fire once');
    }, [])
    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {
                        category.parentId ? <Link className='link'
                                to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                                {category.name}
                            </Link> :
                            <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories;
    }
        return (
            <div className="menuHeader">
                <ul>
                    {category.categories.length > 0 ? renderCategories(category.categories) : null}
                </ul>
            </div>
        );
    };

    export default MenuHeader;