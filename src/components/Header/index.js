import React, {useState} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {styles} from './styles';
import Input from '../Input';

const Header = ({
  title,
  onBackPress,
  onSearch,
  onLogout,
  showLogout,
  showSearch,
  showBack,
  keyword,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable onPress={onBackPress} hitSlop={20}>
            <Image
              style={[styles.icon, {marginRight: -30}]}
              source={require('../../assets/back.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable onPress={onSearchClick} hitSlop={20}>
            <Image
              style={styles.icon}
              source={require('../../assets/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}

        <Text style={styles.title}>{title}</Text>

        {showLogout ? (
          <Pressable onPress={onLogout} hitSlop={20}>
            <Image
              style={styles.icon}
              source={require('../../assets/logout.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={keyword}
          placeholder="Type in search keywords..."
        />
      ) : null}
    </View>
  );
};

export default React.memo(Header);
