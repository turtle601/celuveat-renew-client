import { css } from '@emotion/react';
import { borderRadius, Center, color, Text } from 'ik-ui-library';
import { useNavigate } from 'react-router';

function RouterErrorPage({ errorMessage }: { errorMessage: string }) {
  const navigate = useNavigate();

  const goPrevPage = () => navigate(-1);

  return (
    <Center
      direction={'column'}
      etcStyles={{ width: '100%', height: 'calc(100vh - 80px)' }}
    >
      <Text label={errorMessage} textColor={'gray400'} textWeight={'bold'} />
      <div
        css={css({
          height: '40px',
        })}
      ></div>
      <button
        css={css({
          padding: '12px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: `1px solid ${color.gray200}`,
          borderRadius: borderRadius.sm,
          '&:hover': {
            backgroundColor: color.gray200,
          },
        })}
        onClick={goPrevPage}
      >
        <Text
          label="이전 페이지로 가기"
          textSize="sm"
          textColor={'gray400'}
          textWeight="bold"
        />
      </button>
    </Center>
  );
}

export default RouterErrorPage;
