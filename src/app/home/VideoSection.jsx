import Container from '@/components/Container'
import React from 'react'
import styles from '@/components/styles/hero.module.css'

const VideoSection = () => {
  return (
    <div className='bg-[#F7F6F1] h-[870px]'>
        <Container>
        <video src="http://consto.themezinho.net/wp-content/uploads/2020/06/video01.mp4" controls  muted="" loop=""  className={`${styles.video}`}></video>
        </Container>
    </div>

  )
}

export default VideoSection