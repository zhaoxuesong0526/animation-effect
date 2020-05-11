/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './index.scss';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三','效果四'],
      curIndex: 0
    };
  }
  render() {
    return (
      <div className="Button">
        <Layout className="site-layout-background">
          <Slider
            menuList={this.state.menuList}
            handlerCick={this.handlerCick}
          ></Slider>
          <Content className="site-layout-background">
            {this.state.curIndex === 0 && (
              <div>
                <a href="//ianlunn.github.io/Hover/" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="//ianlunn.github.io/Hover/"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 1 && (
              <div>
                <a href="https://tympanus.net/Development/CreativeButtons/" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://tympanus.net/Development/CreativeButtons/"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 2 && (
              <div>
                <a href="https://codepen.io/davidicus/full/emgQKJ" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://codepen.io/davidicus/full/emgQKJ"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 3 && (
              // https://codepen.io/ahmedbeheiry/pen/aBdezY
              <div>
                 <a href="https://cdpn.io/ahmedbeheiry/fullpage/aBdezY" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://cdpn.io/ahmedbeheiry/fullpage/aBdezY"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
                {this.state.curIndex === 3 && (
              // https://codepen.io/ahmedbeheiry/pen/aBdezY
              <div>
                 <a href="https://cdpn.io/foxeisen/fullembedgrid/bqZxLa?type=embed&animations=run" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://cdpn.io/foxeisen/fullembedgrid/bqZxLa?type=embed&animations=run"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            

          </Content>
        </Layout>
      </div>
    );
  }
  handlerCick = (item, index) => {
    console.log(item);
    this.setState({
      curIndex: index
    });
  };
}
