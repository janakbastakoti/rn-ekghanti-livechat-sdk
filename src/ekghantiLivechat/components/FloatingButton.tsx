import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

type FloatingChatButtonProps = {
  onPress?: () => void;
};

const FloatingChatButton = ({ onPress }: FloatingChatButtonProps) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const bubbleScaleAnim = useRef(new Animated.Value(1)).current;

  const messages = [
    "Hi!",
    "How can I help you?"
  ];

  // Animate messages in on mount and start subtle breathing effect
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(bubbleScaleAnim, {
          toValue: 1.03,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(bubbleScaleAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();

    return () => {
      loop.stop();
    };
  }, []);

  const handlePress = () => {
    // Scale animation for button press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onPress) {
        onPress();
      }
    });
  };

  const renderMessage = (message: any, index: any) => {
    return (
      <Animated.View
        key={index}
        style={[
          styles.messageContainer,
          {
            opacity: fadeAnim,
            transform: [
              { translateY: slideAnim },
              { scale: bubbleScaleAnim },
            ],
          },
        ]}
      >
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>{message}</Text>
          <View style={styles.messageTail} />
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Messages */}
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => renderMessage(message, index))}
      </View>

      {/* Floating Button */}
      <Animated.View
        style={[
          styles.floatingButton,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={handlePress}
          activeOpacity={0.8}
        >
          <View style={styles.chatIcon}>
            <Text style={styles.chatIconText}>💬</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'flex-end',
    zIndex: 1000,
  },
  messagesContainer: {
    marginBottom: 8,
    alignItems: 'flex-end',
  },
  messageContainer: {
    marginBottom: 8,
    maxWidth: width * 0.7,
  },
  messageBubble: {
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  messageTail: {
    position: 'absolute',
    bottom: -5,
    right: 15,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#4A5568',
  },
  floatingButton: {
    width: 70,
    height: 70,
    borderRadius: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  chatIcon: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatIconText: {
    fontSize: 24,
  },
});

export default FloatingChatButton;