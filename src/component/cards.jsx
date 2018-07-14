import React from 'react'

import { Card, Badge } from 'antd';
import Axios from 'axios';

class Cards extends React.Component {
  constructor(props) {
    // 占位
    super(props)
    this.state = {
      id: 186016,
      musicinfo: {},
      data: [],
      loading: false
    }
  }
  componentDidMount() {
    Axios.get(`http://localhost:4000/song/detail?ids=${this.state.id}`)
    // .then(res => console.log(res.data.songs[0]))
      .then(res => this.setState({
        loading: true,
        musicinfo: res.data.songs[0]
      }))
    Axios.get(`http://localhost:4000/comment/music?id=${this.state.id}&limit=0`)
      .then(res => this.setState({
        data: res.data.hotComments 
      }))
  }

  // 处理时间
  handletime = (dates) => {
    const date = new Date(dates);
    const Y = date.getFullYear() + '年';
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
    const D = date.getDate() + '日';
    // h = date.getHours() + ':';
    // m = date.getMinutes() + ':';
    // s = date.getSeconds(); 
    // console.log(Y+M+D+h+m+s); //呀麻碟
    // console.log(`${Y}${M}${D}`)
    return Y + M + D
  }
  // 处理歌曲ID


  render() {
    const { data, musicinfo, loading } = this.state;
    console.log(this.state)
    console.log(this.props) 
    // title={this.handleMusicName(id)} 
    return(
      <div>
        { loading ? data.map(item => 
            <Card title={`${musicinfo.name}--(${musicinfo.ar[0].name})`} key={item.commentId} hoverable style={{ backgroundColor: '#fff', margin: '30px 0' }}>
              <p>{item.content}</p>
              <p style={{ textAlign: 'right' }}>{item.user.nickname}</p>
              <div style={{ textAlign: 'right' }}>
                <time className="card-time">{this.handletime(item.time)}</time>
                <span>
                <Badge count={item.likedCount} overflowCount={99999} />
                </span>
              </div>
            </Card>
          ) :
          <p>加载中</p>
        }
      </div>
    )
  }
}

export default Cards