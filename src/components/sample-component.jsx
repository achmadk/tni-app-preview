import React, {Component} from 'react'

import SampleList from './sample-list'

export default class SampleComponent extends Component {
  render () {
    return (
      <div className='list-block'>
        <ul>
          {
          this.props.todos.map(todo => <SampleList key={todo.get('id')} list={todo} />)
        }
        </ul>
      </div>
    )
  }
}
