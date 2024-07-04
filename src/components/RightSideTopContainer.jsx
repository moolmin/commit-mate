import React from 'react'
import styles from '../styles/RightSideTopContainer.module.css'
import noti from '../images/noti.png'
import profileImage from '../images/hong.png'
import drop from '../images/drop.png'

export default function RightSideTopContainer({ customStyle }) {
  return (
    <>
      <div
        className={`${styles.topContainer} ${customStyle ? styles[customStyle] : ''}`}
      >
        <div className={styles.notiContainer}>
          <img src={noti} alt='notification' className={styles.notiIcon} />
        </div>
        <div className={styles.profileContainer}>
          <div className={styles.innerContainer}>
            <img
              src={profileImage}
              alt='profile'
              className={styles.profileImage}
            />
            <div className={styles.organizationName}>404-Mental</div>
          </div>
          <img src={drop} alt='drop' className={styles.dropImage} />

        </div>

      </div>
      <div className={styles.resImgContainer}>
        <img
          src={profileImage}
          alt='profile'
          className={styles.profileImage}
        />
    </div>
    </>
  )
}
