import { Button } from "component/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const menuLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
const HeaderStyles = styled.div`
  padding: 40px 0;
  .header-container {
    display: flex;
    justify-content: space-between;
  }
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
    gap: 20px;
  }
  .menu {
    display: flex;
    gap: 20px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
  }

  .search {
    max-width: 320px;
    width: 100%;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    display: flex;
    align-items: center;
    position: relative;
    padding: 15px 25px;
    margin-right: 20px;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }
  .icon-search {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  .header-second {
    display: flex;
    max-width: 500px;
    width: 100%;
    align-items: center;
  }
`;

function getLastName(name) {
  const length = name.split("").length;
  return name.split("")[length - 1];
}

const Header = () => {
  const { userInfo } = useAuth();
  console.log(userInfo);
  return (
    <HeaderStyles>
      <div className="container header-container">
        <div className="header-main">
          <NavLink to="/">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLinks.length > 0 &&
              menuLinks.map((item) => (
                <li key={item.title}>
                  <NavLink to={item.url}>{item.title}</NavLink>
                </li>
              ))}
          </ul>
        </div>

        <div className="header-second">
          <div className="search">
            <input
              placeholder="Search posts..."
              type="text"
              className="search-input"
            />
            <span className="icon-search">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          {!userInfo ? (
            <Button
              type="button"
              to="/sign-up"
              className="header-button"
              height="56px"
            >
              Sign Up
            </Button>
          ) : (
            <div className="header-auth">
              <span>Welcome back,</span>
              {/* <span>{getLastName(userInfo?.displayName)}</span> */}
              <strong className="text-primary">{userInfo?.displayName}</strong>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
