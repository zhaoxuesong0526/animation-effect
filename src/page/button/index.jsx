import React from 'react';
import './index.scss';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三'],
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
