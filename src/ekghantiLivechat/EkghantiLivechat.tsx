import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler, Modal, SafeAreaView, StyleSheet } from 'react-native';
import FloatingChatButton from './components/FloatingButton';
import ChatScreen from './page/chat/Chat';
import ChatIntroScreen from './page/introduction/Introduction';

type Props = {
  // Define your props here
}

const EkghantiLivechat: React.FC<Props> = ({  }) => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [currentView, setCurrentView] = useState<'intro' | 'chat'>('intro');

  const openIntro = useCallback(() => {
    setCurrentView('intro');
    setIsIntroVisible(true);
  }, []);

  const closeIntro = useCallback(() => setIsIntroVisible(false), []);

  const startChat = useCallback(() => setCurrentView('chat'), []);
  const backToIntro = useCallback(() => setCurrentView('intro'), []);

  useEffect(() => {
    const onBackPress = () => {
      if (!isIntroVisible) return false;
      if (currentView === 'chat') {
        setCurrentView('intro');
        return true;
      }
      setIsIntroVisible(false);
      return true;
    };

    const sub = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => sub.remove();
  }, [isIntroVisible, currentView]);

  return (
    <>
      <FloatingChatButton onPress={openIntro} />

      <Modal
        visible={isIntroVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeIntro}
        transparent={false}
      >
        <SafeAreaView style={styles.modalContainer}>
          {currentView === 'intro' ? (
            <ChatIntroScreen onClose={closeIntro} onStartChat={startChat} />
          ) : (
            <ChatScreen onClose={closeIntro} onBackToIntro={backToIntro} />
          )}
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default EkghantiLivechat;