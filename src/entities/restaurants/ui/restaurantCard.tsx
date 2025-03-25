import { css } from '@emotion/react';
import { color, Flex, spacer, Spacer, Text } from 'ik-ui-library';

import Star from '../../../shared/assets/etc/star.svg?react';

import type { Restaurant } from '../restaurants.type';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Flex
      justify="space-between"
      etcStyles={{
        width: '100%',
        height: '160px',
        padding: '1.5rem',
      }}
    >
      <Flex direction="column" justify="space-between">
        <div>
          <Text
            as="span"
            label={restaurant.name}
            textWeight="bold"
            textSize={'md'}
          />

          <Spacer direction="vertical" space={spacer['spacing3']} />
          <Text
            as="span"
            label={restaurant.category}
            textWeight="regular"
            textSize={'sm'}
          />
          <Spacer direction="vertical" space={spacer['spacing2.5']} />
          <Text
            as={'div'}
            label={restaurant.roadAddress}
            textWeight="regular"
            textSize={'sm'}
          />
        </div>
        <Flex
          align="end"
          css={css({
            width: 'max-content',
            backgroundColor: '#FFB26B',
            padding: '0.25rem',
            borderRadius: '4px',
            'svg + span': {
              marginLeft: '0.1rem',
            },
            '& svg': {
              verticalAlign: 'middle',
            },
          })}
        >
          <Star color={color['primary-1']} />
          <span
            css={css({
              fontSize: '10px',
              color: color['primary-1'],
              fontWeight: 'bold',
            })}
          >{`${restaurant.visitedCelebrities[0].name} 외 ${restaurant.visitedCelebrities.length}명 추천`}</span>
        </Flex>
      </Flex>
      <img
        css={css({
          width: '120px',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '4px',
        })}
        src={restaurant.imgUrl}
        alt={`${restaurant.name}의 음식점 이미지`}
      />
    </Flex>
  );
}

export default RestaurantCard;
