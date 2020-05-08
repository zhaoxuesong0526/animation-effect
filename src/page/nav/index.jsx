import React from 'react';
import Slider from '../../components/slider';
import { Layout } from 'antd';
const { Content } = Layout;
export default class Nav extends React.Component{
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
                {/* <iframe
                  ref={(ref) => {
                    this.iframe = ref;
                  }}
                  id="iframe"
                  className="iframe"
                  title="xxx"
                  src="./nav.html"
                  frameBorder="0"
                ></iframe> */}
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