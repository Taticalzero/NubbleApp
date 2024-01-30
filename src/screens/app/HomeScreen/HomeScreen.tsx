import React from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { Post, usePostList } from '@domain';

import { PostItem, Screen} from '@components';
import { AppTabScreenProps } from '@routes';

import { HomeEmpty } from './components/HomeEmpty';
import { HomeHeader } from './components/HomeHeader';

export function   HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const { error, loading, postList, refetch} = usePostList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }
  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader/>}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListEmptyComponent={
          <HomeEmpty refetch={refetch} error={error} loading={loading} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
  flex: 1,
};
