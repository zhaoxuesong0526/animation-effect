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
      <div  className="Button">
        <Layout className="site-layout-background">
          <LeftSlider
            menuList={this.state.menuList}
            handlerCick={this.handlerCick}
          ></LeftSlider>
          <Content className="site-layout-background">
            {this.state.curIndex === 0 && (
              <div>
                <a href="https://www.swiper.com.cn/demo/web/index.html" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
<<<<<<< HEAD
                  src="https://www.swiper.com.cn/demo/web/index.html"
=======
                  src=""
>>>>>>> 4413172a2bdb9b32efa3ab6b77dc7ee9aac9915f
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 1 && (
              <div>
<<<<<<< HEAD
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
=======
                <a style={{ display: 'block'}} target="_blank" href="https://www.jssor.com/demos/nearby-image-partial-visible-slider.slider">https://www.jssor.com/demos/nearby-image-partial-visible-slider.slider</a>
                <a style={{ display: 'block'}} target="_blank" href="https://www.jssor.com/demos/scrolling-logo-thumbnail-slider.slider">https://www.jssor.com/demos/scrolling-logo-thumbnail-slider.slider</a>
                <a style={{ display: 'block' }} target="_blank" href="https://www.jssor.com/demos/image-gallery-with-vertical-thumbnail.slider">https://www.jssor.com/demos/image-gallery-with-vertical-thumbnail.slider</a>
                <a style={{ display: 'block' }} target="_blank" href="https://www.jssor.com/slideshow/x-zoom.html">https://www.jssor.com/slideshow/x-zoom.html</a>
                <a style={{ display: 'block' }} target="_blank" href="https://www.jssor.com/skins/thumbnail/thumbnail-skin-121.slider/=skin">https://www.jssor.com/skins/thumbnail/thumbnail-skin-121.slider/=skin</a>
                            
>>>>>>> 4413172a2bdb9b32efa3ab6b77dc7ee9aac9915f
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
