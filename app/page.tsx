'use client';

import styles from './page.module.css';

export default function HomePage() {
  const openModal = () => {
    document.getElementById('modal')?.classList.add(styles.show);
  };

  const closeModal = () => {
    document.getElementById('modal')?.classList.remove(styles.show);
  };

  const toggleSection = (id: string) => {
    const panel = document.getElementById(id);
    if (!panel) return;
    const isOpen = panel.style.maxHeight;
    panel.style.maxHeight = isOpen ? '' : panel.scrollHeight + 'px';
  };

  const toggleMenu = () => {
    document.getElementById('navMenu')?.classList.toggle(styles.showMenu);
  };

  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <header className={styles.header}>
        <div className={styles.logo}>MyApp</div>
        <button id="hamburgerBtn" className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
      </header>

      {/* モーダル例 */}
      <main className={styles.main}>
        <h2>お問い合わせ</h2>
        <button onClick={openModal} className={styles.popButton}>
          お問い合わせフォームを開く
        </button>
        <div id="modal" className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <span onClick={closeModal} className={styles.close}>×</span>
            <h3>お問い合わせフォーム</h3>
            <p>ご質問やご意見がありましたら、こちらからお気軽にお問い合わせください。</p>
            <button onClick={closeModal} className={styles.popButton}>
              閉じる
            </button>
          </div>
        </div>

        {/* アコーディオン例 */}
        <h2>サービス紹介</h2>
        <div className={styles.accordionItem}>
          <div
            className={styles.accordionHeader}
            onClick={() => toggleSection('panel1')}
          >
            サービス概要
          </div>
          <div id="panel1" className={styles.accordionPanel}>
            <p>当サイトでは、Next.jsを使ったモーダル、アコーディオン、ハンバーガーメニューの実装例を学べます。</p>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div
            className={styles.accordionHeader}
            onClick={() => toggleSection('panel2')}
          >
            利用方法
          </div>
          <div id="panel2" className={styles.accordionPanel}>
            <p>まずはコードをコピーし、実際に動かして動作を確認してみましょう。</p>
          </div>
        </div>
      </main>

      {/* ハンバーガーメニュー */}
      <nav id="navMenu" className={styles.navMenu} onClick={toggleMenu}>
        <div className={styles.menuPanel} onClick={e => e.stopPropagation()}>
          <ul>
            <li><a href="#modal" onClick={toggleMenu}>お問い合わせ</a></li>
            <li><a href="#panel1" onClick={toggleMenu}>サービス概要</a></li>
            <li><a href="#panel2" onClick={toggleMenu}>利用方法</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
