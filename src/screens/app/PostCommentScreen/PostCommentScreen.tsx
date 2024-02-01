import React from 'react';

import { usePostCommentList } from '@domain';

import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen ({route} : AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const {error, fetchNextPage, list, loading , refresh} = usePostCommentList(postId);
  return (
    <Screen canGoBack title="Comentários">
      <Text preset="paragraphMedium"> Tela de Comentarios</Text>
    </Screen>
  );
}
