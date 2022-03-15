import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle from './conponents/PageTitle';
import AppHeader from './conponents/AppHeader';
import AppContent from './conponents/AppContent';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4em',
          },
        }}
      />
    </>
  );
}

export default App;
