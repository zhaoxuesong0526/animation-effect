import React from 'react';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三'],
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
           
              <iframe
                ref={(ref) => {
                  this.iframe = ref;
                        }}
                        id="iframe"
                className="iframe"
                title="xxx"
                src="http://www.imagehover.io/"
                frameBorder="0"
              ></iframe>
            {this.state.curIndex === 1 && (
              <iframe
                
               
                className="iframe"
                title="xxx"
                src="http://hasinhayder.github.io/ImageCaptionHoverAnimation/index2.html"
                frameBorder="0"
              ></iframe>
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
