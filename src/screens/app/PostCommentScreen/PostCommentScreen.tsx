import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom , PostCommentItem } from './components';
export function PostCommentScreen ({route} : AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {bottom} = useAppSafeArea();
  const {error, fetchNextPage, list, loading , refresh, hasNextPage} = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }
  return (
    <Screen canGoBack title="Comentários">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: bottom}}
        ListFooterComponent={
          <PostCommentBottom
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        }
      />
    </Screen>
  );
}
