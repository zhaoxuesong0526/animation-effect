import React from 'react';
import './index.scss'
export default class Home extends React.Component {
  render() {
    return (
        <div className="Home">
            <h3>动画的原则</h3> &nbsp;
               <p>  自然 高效 克制</p> &nbsp;
            <h3>动效价值</h3> &nbsp;
                <p> 增加体验舒适度： 让用户认知过程更为自然。</p>
                &nbsp;<p>增加界面活力：第一时间吸引注意力，突出重点。</p>
                &nbsp;<p>描述层级关系：体现元素之间的层级与空间关系。</p>
                &nbsp;<p>提供反馈、明确意向：助力交互体验。 </p> &nbsp;
            <h3>衡量动效意义</h3> &nbsp;
                &nbsp;&nbsp;<p>衡量一个动效是否有意义，我们可以通过以下几个标准来考核：</p>
                &nbsp;<p>一个动效的存在是否合理：是否带有明确的目的性，助力交互体验，没有多余的动效</p>
                &nbsp;<p>动效与性能：不能出现大幅度波动丢帧或者卡顿现象, 动效的体验须是流畅的，并且不影响产品的性能。</p>
         </div>
    );
  }
}
