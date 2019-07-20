import React from 'react';
import './index.scss';

class Author extends React.Component {
  state = {
    focused: false,
  };
  render() {
    return (
      <div className='authors'>
        <p >
          Disigned and{' '}
          <span
            className={this.state.focused ? `author focused ` : 'author'}
            onMouseEnter={()=> this.setState({focused:true})}
            onMouseLeave={() => this.setState({focused: false})}>
            Coded
          </span>{' '}
          by
        </p>
        <span>{this.state.focused ? 'Spuvec' : 'Peter Weingberg'}</span>
      </div>
    );
  }
}
export default Author;
