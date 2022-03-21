import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <div>
        <Avatar size={100} src="../static/img1.jpg" />
      </div>
      <div className='author-introduction'>
        15年开发经验，目前主做前端开发。努力每年录制100集免费视频教程，帮助新人学习。
        <Divider>社交账号</Divider>
        <Avatar icon={<GithubOutlined />} size={28} className="account" />
        <Avatar icon={<QqOutlined />} size={28} className="account" />
        <Avatar icon={<WechatOutlined />} size={28} className="account" />
      </div>
    </div>
  )
}

export default Author;