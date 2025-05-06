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

  const scrollToAndClose = (id: string) => {
    toggleMenu();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
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

      {/* メインコンテンツ */}
      <main className={styles.main}>
        {/* アコーディオン */}
        <h2 id="animals">動物紹介</h2>
        <div className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={(e) => toggleSection('panel1')}>
            パンダ
          </div>
          <div id="panel1" className={styles.accordionPanel}>
            <p>ジャイアントパンダは中国に生息し、竹を主食とするクマ科の動物です。</p>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => toggleSection('panel2')}>
            トラ
          </div>
          <div id="panel2" className={styles.accordionPanel}>
            <p>トラは力強い肉食獣で、アジア各地の森林や草原に生息しています。</p>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => toggleSection('panel3')}>
            ゾウ
          </div>
          <div id="panel3" className={styles.accordionPanel}>
            <p>ゾウは陸上で最大の哺乳類で、長い鼻（象鼻）と大きな耳が特徴です。</p>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => toggleSection('panel4')}>
            キリン
          </div>
          <div id="panel4" className={styles.accordionPanel}>
            <p>キリンは首が非常に長く、アフリカのサバンナで高い木の葉を食べます。</p>
          </div>
        </div>
        <div className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => toggleSection('panel5')}>
            イルカ
          </div>
          <div id="panel5" className={styles.accordionPanel}>
            <p>イルカは高い知能を持つ海棲哺乳類で、群れで協力して狩りを行います。</p>
          </div>
        </div>

        {/* モーダル */}
        <h2 id="contact">お問い合わせ</h2>
        <button onClick={openModal} className={styles.popButton}>
          お問い合わせフォームを開く
        </button>
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span onClick={closeModal} className={styles.close}>
              ×
            </span>
            <h3>お問い合わせフォーム</h3>
            <p>ご質問やご意見がありましたら、こちらからお気軽にお問い合わせください。</p>
            <button onClick={closeModal} className={styles.popButton}>
              閉じる
            </button>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>{`© ${new Date().getFullYear()} MyApp. All rights reserved.`}</p>
        </div>
      </footer>

      {/* ハンバーガーメニュー */}
      <nav id="navMenu" className={styles.navMenu} onClick={toggleMenu}>
        <div className={styles.menuPanel} onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <a href="#" onClick={() => scrollToAndClose('animals')}>
                動物紹介
              </a>
            </li>
            <li>
              <a href="#" onClick={() => scrollToAndClose('contact')}>
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
