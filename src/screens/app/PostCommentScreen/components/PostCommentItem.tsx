import React from 'react';

import { Post, PostComment } from '@domain';

import { Box, ProfileAvatar, Text } from '@components';

interface Props {
  postComment: PostComment
}
export function PostCommentItem({postComment}: Props) {
  return (
    <Box flexDirection="row" mb="s16" alignItems="center">
        <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>{postComment.author.name}</Text>
        <Text preset="paragraphSmall" color="gray1">{postComment.message}</Text>
      </Box>
    </Box>
  );
}
