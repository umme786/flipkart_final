import React, { Component } from "react";
import Login from "../../auth/login";
import { withRouter } from "react-router-dom";
import Cartsidebar from "../web/views/cart-sidebar";
import { GetUserLogin } from "../../components/services";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      userName: "",
      searchtxt: "",
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async componentDidMount() {
    let cookies = await GetUserLogin.isAuthenticate();
    this.setState({ token: cookies });
    let email = sessionStorage.getItem("email");
    if (email) {
      let user = await GetUserLogin.getCustomerDetail(email);
      if (user) {
        this.setState({ userName: user.data.firstName });
      }
    }
  }
  handleLogout = async (event) => {
    event.preventDefault();
    await GetUserLogin.logout();
  };
  handleClickSearch = (event) => {
    let { searchtxt } = this.state;
    this.props.history.push(`/product/catalogsearch/result/${searchtxt}`);
  };
  render() {
    let { token, userName, searchtxt } = this.state;
    return (
      <div>
        <header className="header clearfix">
          <div className="navbar-top bg-success pt-2 pb-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <a href="/" className="mb-0 text-white">
                    20% cashback for new users | Code:{" "}
                    <strong>
                      <span className="text-light">
                        OGOFERS13 <span className="mdi mdi-tag-faces" />
                      </span>{" "}
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-light navbar-expand-lg bg-[#2874f0] bg-faded osahan-menu hover:text-white">
            <div className="w-[98%] mx-auto">
              <div className="container-fluid">
                <a
                  className="navbar-brand hover:text-transparent"
                  href="/"
                  style={{ color: "#fff" }}
                >
                  <span>
                    <img
                      src="img/flipkart_logo.png"
                      alt="logo"
                      className="w-20"
                    />
                  </span>
                  <span className="flex">
                    <i className="text-sm"> Explore </i>{" "}
                    <i className="text-yellow-400 items-center text-sm flex">
                      {" "}
                      plus{" "}
                      <img
                        src="img/logo_star.png"
                        alt="logo"
                        className="w-3 h-3"
                      />{" "}
                    </i>
                  </span>
                </a>
                <button
                  className="navbar-toggler navbar-toggler-white"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse" id="navbarNavDropdown">
                  <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                    <div
                      className="top-categories-search"
                      onSubmit={this.handleClickSearch}
                    >
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Search for products, brands and more"
                          aria-label="Search products in Your City"
                          type="text"
                          name="searchtxt"
                          value={searchtxt}
                          onChange={(e) => this.handleChange(e)}
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-secondary p-0"
                            type="submit"
                            onClick={this.handleClickSearch}
                          >
                            {" "}
                            <i
                              class="fa fa-search search-css text-xl mr-4 pr-[12px] pt-[7px] pb-[6.5px] bg-white text-[#2874f0]"
                              aria-hidden="true"
                            ></i>{" "}
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="my-2 my-lg-0">
                    <ul className="list-inline main-nav-right">
                      <li className="list-inline-item">
                        <a
                          data-target="#bd-example-modal"
                          data-toggle="modal"
                          id="bd-modal"
                          className="btn btn-link nav_btn bg-white rounded-sm py-2.5 px-4 text-blue-500 shadow-lg font-bold"
                          style={
                            token ? { display: "none" } : { display: "block" }
                          }
                        >
                          {" "}
                          <i className="mdi mdi-account-circle align-middle text-[20px]" />{" "}
                          Login/Sign Up
                        </a>
                        <div
                          className="dropdown"
                          style={
                            token ? { display: "block" } : { display: "none" }
                          }
                        >
                          <button
                            className="btn btn-account dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {userName}
                          </button>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="/account/view">
                              <i className="uil uil-apps" />
                              Dashboard
                            </a>
                            <a
                              className="dropdown-item"
                              href="/account/profile"
                            >
                              <i
                                className="mdi mdi-account-outline"
                                aria-hidden="true"
                              ></i>
                              My Profile
                            </a>
                            <a
                              className="dropdown-item"
                              href="/account/wishlist"
                            >
                              <i
                                className="mdi mdi-heart-outline"
                                aria-hidden="true"
                              ></i>
                              Wish List
                            </a>
                            <a
                              className="dropdown-item"
                              href="/account/order/list"
                            >
                              <i
                                className="mdi mdi-format-list-bulleted"
                                aria-hidden="true"
                              ></i>{" "}
                              Orders List
                            </a>
                            <div class="dropdown-divider"></div>
                            <span
                              className="dropdown-item"
                              onClick={this.handleLogout}
                            >
                              <i
                                className="mdi mdi-lock"
                                aria-hidden="true"
                              ></i>{" "}
                              Logout
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="list-inline-item cart-btn">
                        <Cartsidebar />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* login popup */}
        <Login />
      </div>
    );
  }
}
export default withRouter(Navigation);
