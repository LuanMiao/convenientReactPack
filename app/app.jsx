import React, {Component} from "react";
import ReactDOM from "react-dom";
//引入样式
import "./app.less";
//引入其他组件
import PageOne from "components/pageOne/PageOne";

export default class App extends Component {
  render() {
    return (<div className="container">
    	<h4>Hello!</h4>
      <div className="content"><PageOne/></div>
    </div>);
  }
};

// 最终渲染
ReactDOM.render(<App/>, document.getElementById("root"),);

if (module.hot) {
  module.hot.accept()
}
