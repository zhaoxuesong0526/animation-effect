import React from 'react';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三', '效果四', '效果五', '效果六','效果七',],
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
            <div>部分效果同list</div>
            {this.state.curIndex === 0 && (
              <div>
                 <a href="http://www.imagehover.io/" target="_blank" rel="noopener noreferrer">点击</a>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="//www.imagehover.io/"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 1 && (
                <div>
                  <a href="http://hasinhayder.github.io/ImageCaptionHoverAnimation/index2.html" target="_blank" rel="noopener noreferrer">点击</a>
                  <iframe
                    className="iframe"
                    title="xxx"
                    src="//hasinhayder.github.io/ImageCaptionHoverAnimation/index2.html"
                    frameBorder="0"
                  ></iframe>
                </div>
            )}
            {this.state.curIndex === 2 && (
              <iframe
                className="iframe"
                title="xxx"
                src="//cdpn.io/noeldelgado/fullembedgrid/PZJGLx?type=embed&animations=run"
                frameBorder="0"
              ></iframe>
            )}
            {this.state.curIndex === 3 && (
              <iframe
                className="iframe"
                title="xxx"
                src="https://cdpn.io/chrisdothtml/fullpage/OVmgwK"
                frameBorder="0"
              ></iframe>
            )}

            {this.state.curIndex === 4 && (
              <iframe
                className="iframe"
                title="xxx"
                src="//cdpn.io/nxworld/fullpage/ZYNOBZ"
                frameBorder="0"
              ></iframe>
            )}
            {this.state.curIndex === 5 && (
              <iframe
                id="iFrameKey-d38279a7-ec3f-833d-4116-3c9fa3a7439a"
                src="//cdpn.io/noeldelgado/fullpage/pGwFx"
                name="CodePen"
                allowfullscreen="true"
                sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; vr"
                allowtransparency="true"
                allowpaymentrequest="true"
                class="result-iframe"
                frameBorder="0"
              ></iframe>
            )}

          {this.state.curIndex === 6 && (
              <iframe
                className="iframe"
                title="xxx"
                src="//demo.lanrenzhijia.com/demo/41/4126/demo/open.html"
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
