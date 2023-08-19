import React, { useContext, useEffect, useState } from 'react';
import './LIstProductsContainer.css';
import { context } from '../../context/context';
import { Link, useParams } from 'react-router-dom';
import productList from '../../assets/fakeData/products';
import ListItemBox from '../ListItemBox/ListItemBox';
import { Skeleton } from '@mui/material';

export default function LIstProductsContainer() {
    const contextSite = useContext(context);
    const params = useParams();
    const itemsPerPage = 30; // تعداد نمایش اولیه محصولات قبل از اسکرول
    const [listItems, setListItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noItemsFound, setNoItemsFound] = useState(false);
    const [loadingBox, setLoadingBox] = useState(true);

    // Find Products
    useEffect(() => {
        let filteredItems = [];
        setLoadingBox(true)

        if (contextSite.locationName === 'all' || params.listName === 'all') {
            if (params.listName !== 'all') {
                filteredItems = productList.filter(item => {
                    const lowerCaseTitle = item.title.toLowerCase();
                    const lowerCaseSearchValue = contextSite.navbarSearchValue.toLowerCase();
                    return lowerCaseTitle.includes(lowerCaseSearchValue);
                });
            } else {
                filteredItems = productList;
            }
        } else {
            const stateName = (contextSite.locationName || {}).link?.split('list/')[1];
            filteredItems = productList.filter(item => {
                const lowerCaseTitle = item.title.toLowerCase();
                const lowerCaseListName = params.listName.toLowerCase();
                return (
                    (item.state === stateName && lowerCaseTitle.includes(lowerCaseListName)) ||
                    (item.city === stateName && lowerCaseTitle.includes(lowerCaseListName)) ||
                    item.state === params.listName ||
                    item.city === stateName ||
                    (item.city === params.listName && lowerCaseTitle.includes(lowerCaseListName))
                );
            });
        }

        setListItems(filteredItems.slice(0, itemsPerPage)); // نمایش اولین صفحه (30 تای اول)
        setTimeout(() => setLoadingBox(false), 600);
    }, [params.listName, contextSite.locationName, contextSite.navbarSearchValue]);


    // is Find Products ?
    useEffect(() => {
        listItems.length < 1 ? setNoItemsFound(true) : setNoItemsFound(false)
    }, [listItems])


    // Filter Products
    const selectFilterHandler = (val) => {
        let sortedItems = [...listItems];
        if (val === "low") {
            sortedItems.sort((a, b) => a.price - b.price);
        } else if (val === "high") {
            sortedItems.sort((a, b) => b.price - a.price);
        } else if (val === "new") {
            sortedItems.sort((a, b) => b.id - a.id);
        }

        setListItems(sortedItems);
    };

    // Scroll Load Products
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            const nextPageStartIndex = currentPage * itemsPerPage;
            const nextPageEndIndex = nextPageStartIndex + itemsPerPage;
            const nextPageItems = productList.slice(nextPageStartIndex, nextPageEndIndex);

            setListItems(prevListItems => [...prevListItems, ...nextPageItems]);
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentPage]);

    
    const showAllProducts = () => {
        contextSite.setNavbarSearchValue('')
    }

    return (
        <>
            <div className="list-page__section-list">
                <div className="list-page__section-list-nav dfb">
                    <div className="list-page__section-list-nav-right">
                        {/* loading */}
                        {!contextSite.navbarSearchValue ? <span>همه اگهی ها</span> : contextSite.navbarSearchValue && (
                            <>
                                <Link to={contextSite.locationName.link} onClick={showAllProducts}>همه آگهی ها</Link>
                                <span>{contextSite.navbarSearchValue}</span>

                            </>
                        )}
                    </div>
                    <div className="list-page__section-list-nav-left">
                        <img src="/images/list-page/icon1.svg" alt="" />
                        <select name="filter" onChange={e => selectFilterHandler(e.target.value)}>
                            <option value="new">جدید ترین</option>
                            <option value="low">قیمت کم</option>
                            <option value="high">قیمت زیاد</option>
                        </select>
                    </div>
                </div>

                {/* list items */}
                <section className='list-page__items-box'>
                    {loadingBox && Array.from({ length: itemsPerPage }).map((_, index) => (
                        <Skeleton
                            className='list-page__item-link'
                            sx={{ bgcolor: 'grey.400' }}
                            variant="rectangular"
                            width={280}
                            height={99}
                            key={index}
                        />
                    ))}
                    {/* list */}
                    {!loadingBox && listItems && listItems.map(item => (
                        <ListItemBox title={item.title} price={item.price} time={item.time} img={item.imgArray[0]} id={item.id} key={item.id} />
                    ))}
                </section>
                {!loadingBox && noItemsFound && (
                    <div className='list-page__items-undefained'>
                        <img src="/images/icon.png" alt="icon" />
                        <p>کالایی پیدا نشده است</p>
                    </div>
                )}
            </div>
        </>
    )
}
