import { css } from '@emotion/react';
import { color, Flex, spacer, Spacer } from 'ik-ui-library';

function RestaurantCard() {
  return (
    <Flex
      justify="space-between"
      etcStyles={{
        width: '100%',
        height: '180px',
        padding: '1.5rem',
      }}
    >
      <Flex direction="column" justify="space-between">
        <div>
          <div
            css={css({
              width: '100px',
              height: '20px',
              backgroundColor: color.gray200,
            })}
          ></div>
          <Spacer direction="vertical" space={spacer['spacing1']} />
          <div
            css={css({
              width: '120px',
              height: '20px',
              backgroundColor: color.gray200,
            })}
          ></div>
          <Spacer direction="vertical" space={spacer['spacing3']} />
          <div
            css={css({
              width: '120px',
              height: '20px',
              backgroundColor: color.gray200,
            })}
          ></div>
          <Spacer direction="vertical" space={spacer['spacing2.5']} />
          <div
            css={css({
              width: '120px',
              height: '20px',
              backgroundColor: color.gray200,
            })}
          ></div>
        </div>
        <div
          css={css({
            width: '120px',
            backgroundColor: color.gray200,
            borderRadius: '4px',
          })}
        ></div>
      </Flex>
      <div
        css={css({
          width: '120px',
          height: '100%',
          borderRadius: '4px',
          backgroundColor: color.gray200,
        })}
      ></div>
    </Flex>
  );
}

export default RestaurantCard;
