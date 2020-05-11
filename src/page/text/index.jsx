import React from 'react';
import './index.scss';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三', '效果四'],
      curIndex: 0
    };
  }
  render() {
    return (
        <Layout className="site-layout-background">
          <Slider
            menuList={this.state.menuList}
            handlerCick={this.handlerCick}
          ></Slider>
          <Content className="site-layout-background">
          {this.state.curIndex === 0 && (
            <div>
              <section className="centered-container">
                <a className="link link--arrowed" href="#">
                  Ceci est un magnifique bouton
                  <svg
                    className="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#2175FF"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                    >
                      <circle
                        className="arrow-icon--circle"
                        cx="16"
                        cy="16"
                        r="15.12"
                      ></circle>
                      <path
                        className="arrow-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      ></path>
                    </g>
                  </svg>
                </a>
              </section>
              </div>
          )}
            {this.state.curIndex === 1 && (
            <div>
              {/* https://codepen.io/P233/pen/EaGAl */}
              <a href="https://cdpn.io/P233/fullpage/EaGAl" target="_blank" rel="noopener noreferrer">内容未加载出时，可点击此处跳转</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://cdpn.io/P233/fullpage/EaGAl"
                  frameBorder="0"
                ></iframe>
              </div>
          )}
          {this.state.curIndex ===2 && (
            <div>
              {/* http://www.jq22.com/jquery-info21488 */}
              <a href="http://www.jq22.com/demo/jquerycounterup201905121719" target="_blank" rel="noopener noreferrer">内容未加载出时，可点击此处跳转</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="http://www.jq22.com/demo/jquerycounterup201905121719"
                  frameBorder="0"
                ></iframe>
              </div>
          )}
          {this.state.curIndex ===3 && (
            <div>
              <a href="https://onaircode.com/text-hover-effects-css-animation-snippet/" target="_blank" rel="noopener noreferrer">内容未加载出时，可点击此处跳转</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://onaircode.com/text-hover-effects-css-animation-snippet/"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
          </Content>
        </Layout>
    );
  }
  handlerCick = (item, index) => {
    console.log(item);
    this.setState({
      curIndex: index
    });
  };
}
