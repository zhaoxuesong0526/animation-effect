import React from 'react';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Nav extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      menuList: ['效果一', '效果二', '效果三', '效果四', '效果五'],
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
              // http://www.jq22.com/jquery-info20775
              <div>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="http://www.jq22.com/demo/jqueryFloor201804181627"
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
                  src="https://demo.demohuo.top/jquery/23/2348/demo/"
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
                  src="http://www.htmleaf.com/Demo/2014100437.html"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 3 && (
              <div>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="http://www.jq22.com/webqd6255"
                  frameBorder="0"
                ></iframe>
              </div>
            )}
            {this.state.curIndex === 4 && (
              <div>
                <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="http://www.jq22.com/yanshi11012"
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