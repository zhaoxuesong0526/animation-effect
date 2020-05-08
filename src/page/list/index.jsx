import React from 'react';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三', '效果四', '效果五', '效果六',],
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
            )}
            {this.state.curIndex === 1 && (
              <iframe
                className="iframe"
                title="xxx"
                src="http://hasinhayder.github.io/ImageCaptionHoverAnimation/index2.html"
                frameBorder="0"
              ></iframe>
            )}
            {this.state.curIndex === 2 && (
              <iframe
                className="iframe"
                title="xxx"
                src=" https://cdpn.io/noeldelgado/fullembedgrid/PZJGLx?type=embed&animations=run"
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
                src=" https://cdpn.io/nxworld/fullpage/ZYNOBZ"
                frameBorder="0"
              ></iframe>
            )}
            {this.state.curIndex === 5 && (
              <iframe
                id="iFrameKey-d38279a7-ec3f-833d-4116-3c9fa3a7439a"
                src="https://cdpn.io/noeldelgado/fullpage/pGwFx"
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
