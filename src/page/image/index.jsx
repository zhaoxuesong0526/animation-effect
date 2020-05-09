import React from 'react';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二'],
      curIndex: 0
    };
  }
  render() {
    return (
      <div>
        <Layout className="site-layout-background">
          <Slider
            menuList={this.state.menuList}
            handlerCick={this.handlerCick}
          ></Slider>
          <Content className="site-layout-background">
            部分效果同list
            {this.state.curIndex === 0 && (
              <div>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="https://tympanus.net/Development/HoverEffectIdeas/"
                  
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
                  src="http://gudh.github.io/ihover/dist/"
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
