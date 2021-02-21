import React from 'react'
import UserPost from './endpoints/UserPost'
import TokenPost from './endpoints/TokenPost'
import PhotoPost from './endpoints/PhotoPost'
import PhotoGet from './endpoints/PhotoGet'


const Api: React.FC = () => {
  return (
    <>
      <div>USER POST</div>
      <UserPost/>
      <div>TOKEN POST</div>
      <TokenPost/>
      <div>PHOTO POST</div>
      <PhotoPost/>
      <div>PHOTO GET</div>
      <PhotoGet/>
    </>
  )
}

export default Api;