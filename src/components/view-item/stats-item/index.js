import React, { Component } from 'react';

import './styles.css';

class StatsItem extends Component {

  getColor(name) {
    switch(name) {
      case 'damage':
        return 'light-red';
      case 'defence':
        return 'purple';
      case 'hp':
        return 'green';
      case 'VS. dragon':
        return 'orange';
      default:
    }
  }

  render() {
    const { stats } = this.props;

    let name = stats.name;
    if(name === 'damage') name = 'attack';

    return(
      <div className='flex-row stats-item-container'>
        <span>
          { name }
        </span>
        <span style={{ color: `var(--${this.getColor(stats.name)})` }}>
          { '+' + stats.value }
        </span>
      </div>
    );
  }
}

export default StatsItem;
