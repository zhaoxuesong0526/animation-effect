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
            {this.state.curIndex === 0 && (
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
            {this.state.curIndex === 1 && (
              <div>
                <a style={{ display: 'block'}} target="_blank" href="https://www.jssor.com/demos/nearby-image-partial-visible-slider.slider">https://www.jssor.com/demos/nearby-image-partial-visible-slider.slider</a>
                <a style={{ display: 'block'}} target="_blank" href="https://www.jssor.com/demos/scrolling-logo-thumbnail-slider.slider">https://www.jssor.com/demos/scrolling-logo-thumbnail-slider.slider</a>
                <a style={{ display: 'block' }} target="_blank" href="https://www.jssor.com/demos/image-gallery-with-vertical-thumbnail.slider">https://www.jssor.com/demos/image-gallery-with-vertical-thumbnail.slider</a>
                <a style={{ display: 'block' }} target="_blank" href="https://www.jssor.com/slideshow/x-zoom.html">https://www.jssor.com/slideshow/x-zoom.html</a>
                <a style={{ display: 'block' }} target="_blank" href="https://www.jssor.com/skins/thumbnail/thumbnail-skin-121.slider/=skin">https://www.jssor.com/skins/thumbnail/thumbnail-skin-121.slider/=skin</a>
                            
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
