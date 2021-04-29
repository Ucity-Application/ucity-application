import React from 'react';
import { Appbar } from 'react-native-paper';

const AuthBar = ({
  navigation,
  title = '',
  back = false,
  headerStyles = {},
  titleStyle = {},
  previous
}) => {
  if (!title || back.length === 0) {
    throw new Error('Add required fields');
  } else if (typeof back !== 'boolean' || typeof title !== 'string') {
    throw new Error(
      'Pass string for title param Or pass boolean for back param',
    );
  } else {
    return (
      <Appbar.Header style={headerStyles}>
        {previous? (
          <Appbar.BackAction onPress={() => navigation.goBack} />
        ) : null}
        <Appbar.Content title={title} titleStyle={titleStyle} />
      </Appbar.Header>
    );
  }
};

export default AuthBar;
