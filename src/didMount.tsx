import * as React from 'react';
import { Button } from 'semantic-ui-react';
import './didMount.css';

export interface IDidMountProps {
}

interface IDidMountState {
    datalabel:string;
    data: any;

}

export default class Button1 extends React.Component<IDidMountProps,IDidMountState> {
    constructor(props: IDidMountProps) {
        super(props);

        this.state = {
        datalabel:'' , data:''
      }
      
    }
    getData(){
      setTimeout(() => {
        this.setState({
          data:'Ops!! I was disappeard:)'
        })
      }, 1000)
    }
    componentDidMount() {
      this.getData( )}
   
    public newData = () => {
      this.setState({ data:'Yes you are right. I am using componentDidMount() method :-) ' })
    }

  public render() {
    return (
      <React.Fragment>
        <h1>{this.state.data}</h1>
       <Button color= 'red' size= 'massive' content='Click Here' onClick={this.newData}></Button>
     </React.Fragment>
    );
  }
}