import React from 'react'

import { Card, Badge, Icon, Alert } from 'antd';
import Axios from 'axios';
// import { Redirect } from 'react-router-dom';

class Cards extends React.Component {
  constructor(props) {
    // 占位
    super(props)
    this.state = {
      // id: 186016,
      musicinfo: {},
      data: [],
      errorinfo: true,
      loding: false
    }
  }
  componentDidMount() {
    Axios.get(`http://localhost:4000/song/detail?ids=${this.props.match.params.id}`)
      .then(res => {
        if(res.data.songs && res.data.code === 200) {
          console.log("有数据")
          this.setState({
            loding: true,
            musicinfo: res.data.songs[0]
          })
        } 
        // else {
        //   // this.props.history.push('/')
        //   // console.log("没有数据")
          
        // }
      }).catch(error => {
        console.log('error', error)
        this.setState({
          errorinfo: false
        })
      })
    Axios.get(`http://localhost:4000/comment/music?id=${this.props.match.params.id}&limit=0`)
      .then(res => {
        if(res.data.hotComments && res.data.code === 200) {
          this.setState({
            data: res.data.hotComments 
          })
        } else {
          // this.props.history.push('/')
          console.log("没有数据")
        }
      })
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
    const { data, musicinfo, errorinfo, loding } = this.state;
    console.log(this.state)
    console.log(this.props)
    // title={this.handleMusicName(id)} 
    return(
      <div>
        { loding ? data.map(item =>
            <Card
              title={`《${musicinfo.name}》${musicinfo.ar[0].name}`}
              key={item.commentId}
              hoverable
              style={{ backgroundColor: '#fff', margin: '30px 0' }}
              extra={<a target="_banck" href={`http://music.163.com/#/song?id=${this.props.match.params.id}`}>More</a>}
            >
              <p>{item.content}</p>
              <p style={{ textAlign: 'right' }}>{item.user.nickname}</p>
              <div style={{ textAlign: 'right' }}>
                <time className="card-time">{this.handletime(item.time)}</time>
                <span>
                  <Icon type="like-o" style={{ marginRight : '6px',color : 'red' }}/>
                  <Badge count={item.likedCount} overflowCount={99999} />
                </span>
              </div>
            </Card>
          ) 
          :
            errorinfo ? <Card style={{ width: '100%', backgroundColor: '#fff', margin: '30px 0', textAlign : 'center' }}>
              <p>加载中</p>
            </Card>
            : 
            <Alert
              style={{ margin: '30px 0' }}
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon
            />
        }
      </div>
    )
  }
}

export default Cards