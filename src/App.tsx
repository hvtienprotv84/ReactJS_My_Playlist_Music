import { FC } from 'react';

import Player from './components/Player';

import styles from './styles.module.scss';

import logo from './assets/logo_22.png';

const App: FC = () => (
  <main className={styles.app}>

    <div className={styles.container_logo_title}>
    <img className={styles.logo} src={logo} alt=''/>
    <h1 className={styles.title_music}> My Playlist Music - Danh Sách Phát Âm Nhạc Của Tôi</h1>
    </div>

    <h1 className={styles.footer}>&copy; Mọi Bản Quyền Thuộc Về <span>Huỳnh Vĩnh Tiến</span></h1>
    <Player />
  </main>
);


export default App;
