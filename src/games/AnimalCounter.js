import React from "react";

import Button from '@material-ui/core/Button';
//TODO: 必要なライブラリをインポート
//import hogehoge from "hogehoge"

//AnimalCounterコンポーネントを定義
class AnimalCounter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      hiki: 'ひき',
    };

    //TODO: コンポーネントのstateを初期化
    //this.state = {};
  }

  count_name(hiki){
    if(hiki%10 === 2 || hiki%10 ===  4 || hiki%10 === 5 
      || hiki%10 ===  7 || hiki%10 ===  9){
      this.setState({
        hiki: 'ひき'
      })
    }else if(hiki%10 ===  1 || hiki%10 ===  6 || hiki%10 ===  8 
      || hiki%10 ===  0){
        this.setState({
          hiki: 'ぴき'
        })}
        else{
          this.setState({
            hiki: 'びき'
          })
        }
    
  }

  render() {
    //TODO: DOM（HTML要素）の描画処理を追加

    return (
      //TODO: DOMを返す
      
      <Button variant="contained"
      onClick={() => {
        this.setState({
          count: this.state.count + 1,
        })

        {this.count_name(this.state.count+1 )}
      }}
     >
       
      {this.props.animal_name}が{this.state.count}{this.state.hiki}
      </Button>
    );
  }
}

//AnimalCounterをエクスポート
export default AnimalCounter;

