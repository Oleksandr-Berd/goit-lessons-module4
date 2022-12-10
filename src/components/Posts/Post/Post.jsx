import { Likes } from './Likes/Likes';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading/Heading';
import * as SC from './Post.styled';

const FALLBACK_THUMB =
  'https://ixbt.online/live/images/original/16/95/46/2022/09/06/314f024dc6.jpg';

export const Post = ({ title, likes = 0, thumbSrc = FALLBACK_THUMB }) => {
  return (
    <SC.Card>
      <SC.Thumb src={thumbSrc} alt="" />
      <SC.Container>
        <Heading level={2}>{title}</Heading>
        <SC.Likes>
          <Likes amount={likes} />
        </SC.Likes>
      </SC.Container>
    </SC.Card>
  );
};

Post.propTypes = {
  likes: PropTypes.number,
  title: PropTypes.string.isRequired,
  thumbSrc: PropTypes.string,
};
