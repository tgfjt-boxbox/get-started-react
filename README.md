なんかよくわからないから触ってみようぜReact
=========================

`style.css` が CSS で、  
`client.js` が React で書いてある JS です。  
`index.html` は、いろいろ React用のJSとか呼んでます。まぁ触らないです。  

Component
------------

書き方（他にもあるけどとりあえず1つおぼえましょ）はこれです。


```js
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        おれの<span>component</span>
      </div>
    );
  }
}
```

`render()` が描画してくれ！っていう関数です。  
初期ロード時とか、`state` に変更がある度に、こいつが呼ばれると思っておｋです。  

`state` はこんなかんじで使います。  
`まじで？` ボタンを押すと、`state.isWondering` がTrueになったりFalseになったりして、  
`state.isWondering` がかわると、`render()` が呼ばれるので、`message` が変更になります。  


```js
class MyComponent extends React.Component {
  constructor() {
    // 最初は false
    this.state = {
      isWondering: false
    }
  }

  render() {
    const message = this.state.isWondering ? 'Component??' : 'Component';
    // 逆転
    const toggle = () => {
      this.setState({
        value: !this.state.isWondering
      });
    };

    return (
      <div>
        おれの<span>{message}</span>
      </div>
      <button type="button" onClick={toggle}>まじで？</button>
    );
  }
}
```

このように、View となる Component を作っていき、  
状態を持つ Component の場合には、`state` によって変更されるように作ります。
（`is-error`とかね）  
複雑なものは、いくつかの Component を組み合わせたものになるでしょう。
