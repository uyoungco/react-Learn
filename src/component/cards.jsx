import React from 'react'

import { Card, Rate } from 'antd';

class Cards extends React.Component {
  state = {
    value: 3,
    data: [
      {content: '曾经爱了一个男生四年，后来和认识了三天的男孩在一起，我等了他四年，却始终不是他心尖上的人，我认识他三天，可他却像宝贝一样的爱我。我只想说别纠结于时间的长短，用时间来捆绑自己终究不公平。', 
        author:'鹿先森乐队《春风十里》',
        time: '06月28日'
      },
      {
        content: '那时你坐在自行车后面轻轻的哼着这首歌，可一晃都8年过去了，我们偶有交集，却再也回不去了',
        author: '《你要的爱》',
        time: '06月27日'
      },
      {
        content: '那时你坐在自行车后面轻轻的哼着这首歌',
        author: '《你要的爱》',
        time: '06月26日'
      }
    ]
  }
  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { value, data } = this.state;
    return(
      <div>
        {data.map(item => 
          <Card key={item.content} hoverable style={{ backgroundColor: '#fff', margin: '30px 0' }}>
            <p>{item.content}</p>
            <p style={{ textAlign: 'right' }}>——{item.author}</p>
            <div style={{ textAlign: 'right' }}>
              <time className="card-time">{item.time}</time>
              <span>
                <Rate onChange={this.handleChange} value={value} />
                {value && <span className="ant-rate-text">{value} stars</span>}
              </span>
            </div>
          </Card>
        )}
      </div>
    )
  }
}

export default Cards