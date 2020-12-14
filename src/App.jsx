import React from 'react';
import ReactDOM from 'react-dom';
import {Splitter, SplitterSide, SplitterContent, Page, Button} from 'react-onsenui';

import Page1 from "Page1.jsx";
import Page2 from "Page2.jsx";
import Page3 from "Page3.jsx";
import Page4 from "Page4.jsx";
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectMenu:1,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.onClickMenu1 = this.onClickMenu1.bind(this);
  }

  show() {
    this.setState({
      isOpen: true,
      selectMenu:this.state.selectMenu
    });
  }

  hide() {
    this.setState({
      isOpen: false,
      selectMenu:this.state.selectMenu
    });
  }
  
  onClickMenu1(){
    //isOpenをfalseにしてメニューを閉じる。メニュー1を選択状態にする
    this.setState({isOpen:false,selectMenu:1});
  }
  onClickMenu2(){
    //isOpenをfalseにしてメニューを閉じる。メニュー1を選択状態にする
    this.setState({isOpen:false,selectMenu:2});
  }
  onClickMenu3(){
    //isOpenをfalseにしてメニューを閉じる。メニュー1を選択状態にする
    this.setState({isOpen:false,selectMenu:3});
  }
  onClickMenu4(){
    //isOpenをfalseにしてメニューを閉じる。メニュー1を選択状態にする
    this.setState({isOpen:false,selectMenu:4});
  }

  render() {
    var PageContent;
    var menuItemClass = "item";
    if(this.state.selectMenu == 1){
      menuItemClass = "item-selected";
      PageContent = <Page1 show={this.show} />;
    }
    if(this.state.selectMenu == 2){
      menuItemClass = "item-selected";
      PageContent = <Page2 show={this.show} />;
    }
    if(this.state.selectMenu == 3){
      menuItemClass = "item-selected";
      PageContent = <Page3 show={this.show} />;
    }
    if(this.state.selectMenu == 4){
      menuItemClass = "item-selected";
      PageContent = <Page4 show={this.show} />;
    }

    return (
      <Splitter>
        <SplitterSide
          side='left'
          collapse={true}
          isOpen={this.state.isOpen}
          onClose={this.hide.bind(this)}
          swipeable={true}>
          <Page>
            <ul className="menu">
              <li className={menuItemClass} onClick={this.onClickMenu1}>メニュー1</li>
              <li className={menuItemClass} onClick={this.onClickMenu2}>メニュー2</li>
              <li className={menuItemClass} onClick={this.onClickMenu3}>メニュー3</li>
              <li className={menuItemClass} onClick={this.onClickMenu4}>メニュー4</li>
            </ul>
          </Page>
        </SplitterSide>
        <SplitterContent>
          {PageContent
          
          
          }
        </SplitterContent>
      </Splitter>
    );
  }
}
