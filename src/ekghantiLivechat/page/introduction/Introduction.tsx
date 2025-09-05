import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const ChatIntroScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.chatBubbleIcon}>
          <View style={styles.bubbleOuter}>
            <View style={styles.bubbleInner} />
          </View>
        </View>
        
        <TouchableOpacity style={styles.languageSelector}>
          <Text style={styles.languageText}>English</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Chat with us</Text>
        
        {/* Chat Widget */}
        <View style={styles.chatWidget}>
          <View style={styles.chatAvatar}>
            <Text style={styles.avatarEmoji}>😊</Text>
          </View>
          
          <View style={styles.chatContent}>
            <Text style={styles.chatTitle}>Chat with us</Text>
            <Text style={styles.chatSubtitle}>Hello There!</Text>
          </View>
        </View>
        
        {/* Chat Now Button */}
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat Now</Text>
          <Text style={styles.chatButtonArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.homeIcon}>
            <View style={styles.homeIconShape} />
          </View>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
          <View style={styles.chatIcon}>
            <View style={styles.chatIconBubble} />
            <View style={styles.chatIconBubble2} />
          </View>
          <Text style={[styles.navText, styles.navTextActive]}>Chat</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          <Text style={styles.footerBrand}>Chat360</Text>
          <Text style={styles.footerBy}> by </Text>
          <Text style={styles.footerCompany}>🌸 Ekghanti Services</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  
  chatBubbleIcon: {
    width: 40,
    height: 40,
  },
  
  bubbleOuter: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#3b82f6',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  bubbleInner: {
    width: 20,
    height: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 6,
  },
  
  languageSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  
  languageText: {
    fontSize: 14,
    color: '#374151',
    marginRight: 4,
    fontWeight: '400',
  },
  
  dropdownArrow: {
    fontSize: 10,
    color: '#6b7280',
  },
  
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 40,
    fontFamily: 'System', // Use system font
  },
  
  chatWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  
  chatAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  
  avatarEmoji: {
    fontSize: 24,
  },
  
  chatContent: {
    flex: 1,
  },
  
  chatTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  
  chatSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '400',
  },
  
  chatButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 40,
  },
  
  chatButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginRight: 8,
  },
  
  chatButtonArrow: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '400',
  },
  
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
    flex: 1,
  },
  
  homeIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  
  homeIconShape: {
    width: 18,
    height: 16,
    backgroundColor: '#9ca3af',
    borderRadius: 2,
  },
  
  chatIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  
  chatIconBubble: {
    width: 16,
    height: 12,
    backgroundColor: '#9ca3af',
    borderRadius: 8,
    position: 'absolute',
    top: 2,
    left: 2,
  },
  
  chatIconBubble2: {
    width: 12,
    height: 8,
    backgroundColor: '#d1d5db',
    borderRadius: 6,
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  
  navText: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '400',
  },
  
  navTextActive: {
    color: '#6b7280',
    fontWeight: '500',
  },
  
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  
  footerText: {
    fontSize: 12,
  },
  
  footerBrand: {
    color: '#6b7280',
    fontWeight: '600',
  },
  
  footerBy: {
    color: '#9ca3af',
    fontWeight: '400',
  },
  
  footerCompany: {
    color: '#6b7280',
    fontWeight: '400',
  },
});

export default ChatIntroScreen;