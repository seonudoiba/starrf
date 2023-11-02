import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { productData, categories } from "../../static/data";
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import logo from "../../Assets/logo.png";

const Header = ({ activeHeading }) => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    //   const { isSeller } = useSelector((state) => state.seller);
    const isSeller = false;
    //const { wishlist } = useSelector((state) => state.wishlist);
    const wishlist = [];
    //const { cart } = useSelector((state) => state.cart);
    const cart = [];
    //const { allProducts } = useSelector((state) => state.products);
    const allProducts = [];
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [Data, setData] = useState(categories);
    //const [dropDownGraphics, setDropDownGraphics] = useState(false);
    //const [dropDownProgramming, setDropDownProgramming] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openWishlist, setOpenWishlist] = useState(false);
    const [open, setOpen] = useState(false);


  
    const toggleDropdown = (index) => {
        const updatedCategories = Data.map((category, i) => {
          if (i === index) {
            category.dropdown = !category.dropdown;
          } else {
            category.dropdown = false; // Close other dropdowns
          }
          return category;
        });
    
        setData(updatedCategories);
      };

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts =
            allProducts &&
            allProducts.filter((product) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
        setSearchData(filteredProducts);
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <>
            <div className={`${styles.section}`}>
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    <div className="w-[10%] relative mr-8 ">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Starr"
                            />
                        </Link>
                    </div>
                    {/* search box */}
                    <div className="w-[22%] relative">
                        <input
                            type="text"
                            placeholder="Search Product..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch
                            size={30}
                            className="absolute right-2 top-1.5 cursor-pointer"
                        />
                        {searchData && searchData.length !== 0 ? (
                            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                {searchData &&
                                    searchData.map((i, index) => {
                                        return (
                                            <Link to={`/product/${i._id}`}>
                                                <div className="w-full flex items-start-py-3">
                                                    <img
                                                        src={`${i.images[0]?.url}`}
                                                        alt=""
                                                        className="w-[40px] h-[40px] mr-[10px]"
                                                    />
                                                    <h1>{i.name}</h1>
                                                </div>
                                            </Link>
                                        );
                                    })}
                            </div>
                        ) : null}
                    </div>
                    {/* navitems */}
                    <div className={`${styles.noramlFlex} w-[40%] `}>
                        <Navbar active={activeHeading} />
                    </div>

                    {/* // icons */}
                    <div className="flex justify-center bg-yellow-400 border rounded-md w-[12%]">
                        <div className={`${styles.noramlFlex} font-bold flex justify-center  py-1.5 items-center`}>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={() => setOpenWishlist(true)}
                            >
                                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    {wishlist && wishlist.length}
                                </span>
                            </div>
                        </div>

                        <div className={`${styles.noramlFlex} font-bold flex justify-center  py-1.5 items-center`}>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={() => setOpenCart(true)}
                            >
                                <AiOutlineShoppingCart
                                    size={30}
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    {cart && cart.length}
                                </span>
                            </div>
                        </div>

                        <div className={`${styles.noramlFlex} font-bold flex justify-center  py-1.5 items-center`}>
                            <div className="relative cursor-pointer mr-[15px]">
                                {isAuthenticated ? (
                                    <Link to="/profile">
                                        <img
                                            src={`${user?.avatar?.url}`}
                                            className="w-[35px] h-[35px] rounded-full"
                                            alt=""
                                        />
                                    </Link>
                                ) : (
                                    <Link to="/login">
                                        <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* cart popup */}
                        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

                        {/* wishlist popup */}
                        {openWishlist ? (
                            <Wishlist setOpenWishlist={setOpenWishlist} />
                        ) : null}
                    </div>

                    {/* Become Seller */}
                    <div className={`hover:bg-yellow-400 border rounded-md w-[12%]`}>
                        <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                            <h3 className="text-yellow-400 hover:text-white font-bold flex justify-center text-md py-3 items-center">
                                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                                <IoIosArrowForward className="ml-1 " />
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = {`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
                    } transition hidden 800px:flex items-center justify-between w-full border-y-2 h-[50px]`}
            >
                <div className="flex justify-around items-center">
                    {/* categories */}
                    {/* {`${active === index + 1 ? "text-yellow-300 " : "  text-yellow-400 "} 
                    flex items-center justify-center text-xl 800px:h-[50px] 
                    800px:pb-0 font-[500] px-4 cursor-pointer}`} */}
                    {Data && Data.map((category, index) => (
                        <div key={index} onClick={() => toggleDropdown(index)} >
                            <div className="relative h-[60px] mt-[10px]  hidden 1000px:block">
                                <button
                                    className={` w-full flex just items-center px-2 font-sans text-md 800px:h-[50px] font-[500] select-none rounded-t-md`}
                                >
                                    {category.title}
                                </button>
                                {category.dropdown ? (
                                    <DropDown categoriesData={category.data} setDropDown={setDropDown} />
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* mobile header */}
            <div
                className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
                    }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
            >
                <div className="w-full flex items-center justify-between">
                    <div>
                        <BiMenuAltLeft
                            size={40}
                            className="ml-4"
                            onClick={() => setOpen(true)}
                        />
                    </div>
                    <div>
                        <Link to="/">
                            <img
                                src="../../Assets/logo.png"
                                alt=""
                                className="mt-3 cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div>
                        <div
                            className="relative mr-[20px]"
                            onClick={() => setOpenCart(true)}
                        >
                            <AiOutlineShoppingCart size={30} />
                            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                                {cart && cart.length}
                            </span>
                        </div>
                    </div>
                    {/* cart popup */}
                    {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

                    {/* wishlist popup */}
                    {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
                </div>

                {/* header sidebar */}
                {open && (
                    <div
                        className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
                    >
                        <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
                            <div className="w-full justify-between flex pr-3">
                                <div>
                                    <div
                                        className="relative mr-[15px]"
                                        onClick={() => setOpenWishlist(true) || setOpen(false)}
                                    >
                                        <AiOutlineHeart size={30} className="mt-5 ml-3" />
                                        <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                                            {wishlist && wishlist.length}
                                        </span>
                                    </div>
                                </div>
                                <RxCross1
                                    size={30}
                                    className="ml-4 mt-5"
                                    onClick={() => setOpen(false)}
                                />
                            </div>

                            <div className="my-8 w-[92%] m-auto h-[40px relative]">
                                <input
                                    type="search"
                                    placeholder="Search Product..."
                                    className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                {searchData && (
                                    <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                                        {searchData.map((i) => {
                                            const d = i.name;

                                            const Product_name = d.replace(/\s+/g, "-");
                                            return (
                                                <Link to={`/product/${Product_name}`}>
                                                    <div className="flex items-center">
                                                        <img
                                                            src={i.image_Url[0]?.url}
                                                            alt=""
                                                            className="w-[50px] mr-2"
                                                        />
                                                        <h5>{i.name}</h5>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            <Navbar active={activeHeading} />
                            <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                                <Link to="/shop-create">
                                    <h1 className="text-[#fff] flex items-center">
                                        Become Seller <IoIosArrowForward className="ml-1" />
                                    </h1>
                                </Link>
                            </div>
                            <br />
                            <br />
                            <br />

                            <div className="flex w-full justify-center">
                                {isAuthenticated ? (
                                    <div>
                                        <Link to="/profile">
                                            <img
                                                src={`${user.avatar?.url}`}
                                                alt=""
                                                className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                                            />
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            className="text-[18px] pr-[10px] text-[#000000b7]"
                                        >
                                            Login /
                                        </Link>
                                        <Link
                                            to="/sign-up"
                                            className="text-[18px] text-[#000000b7]"
                                        >
                                            Sign up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
