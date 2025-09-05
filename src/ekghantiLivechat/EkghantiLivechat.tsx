import React, { useCallback, useState } from 'react';
import { Modal, SafeAreaView, StyleSheet } from 'react-native';
import FloatingChatButton from './components/FloatingButton';
import ChatIntroScreen from './page/introduction/Introduction';

type Props = {
  // Define your props here
}

const EkghantiLivechat: React.FC<Props> = ({  }) => {
  const [isIntroVisible, setIsIntroVisible] = useState(false);

  const openIntro = useCallback(() => setIsIntroVisible(true), []);
  const closeIntro = useCallback(() => setIsIntroVisible(false), []);

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
          <ChatIntroScreen onClose={closeIntro} />
          {/* <ChatScreen onClose={closeIntro} /> */}
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