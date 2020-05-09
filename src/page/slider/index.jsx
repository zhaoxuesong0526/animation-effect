import React from 'react';
import LeftSlider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Slider extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一'],
      curIndex: 0
    };
  }
  render() {
    return (
      <div className="Button">
        <Layout className="site-layout-background">
          <LeftSlider
            menuList={this.state.menuList}
            handlerCick={this.handlerCick}
          ></LeftSlider>
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
                  src="https://www.swiper.com.cn/demo/web/index.html"
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
                  src=""
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