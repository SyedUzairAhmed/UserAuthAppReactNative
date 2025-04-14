import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({ 
  title, 
  onPress, 
  type = 'primary', 
  loading = false, 
  disabled = false 
}) => {
  const buttonStyle = 
    type === 'primary' 
      ? styles.primaryButton 
      : type === 'secondary' 
        ? styles.secondaryButton 
        : styles.linkButton;
  
  const titleStyle = 
    type === 'primary' 
      ? styles.primaryTitle 
      : type === 'secondary' 
        ? styles.secondaryTitle 
        : styles.linkTitle;

  return (
    <TouchableOpacity
      style={[
        buttonStyle,
        disabled || loading ? styles.disabledButton : null,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator 
          color={type === 'primary' ? '#fff' : '#3498db'} 
          size="small" 
        />
      ) : (
        <Text style={titleStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  primaryTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  secondaryTitle: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  linkTitle: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default CustomButton;