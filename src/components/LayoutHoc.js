import React from "react";
import Header from "./Header";
import Content from "./Content";
import Menu from "./Menu";
import Footer from "./Footer";

class LayoutHoc extends React.Component {
    render() {
        return <div className="wrapper">
            <Header/>
            <Menu/>
            <Content title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                {this.props.children}
            </Content>
            <Footer rightContent={'Standard app'} leftContent={<div>Copyright &copy; Standard app 2020</div>}/>
        </div>
    }
}

export default LayoutHoc
