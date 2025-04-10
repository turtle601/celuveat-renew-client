# 셀럽잇 리뉴얼

## 프로젝트 설명

기존 프로젝트인 셀럽잇 프로젝트의 서버와 api 키가 만료가 되어서
기존 서비스를 잘 보여주기 위해 msw를 활용하여 셀럽잇 서비스를 소개하기 위해 10일 동안 빠르게 만들어본 프로젝트입니다.

이전 프로젝트 github 주소: https://github.com/woowacourse-teams/2023-celuveat

## 기술 스택

```
1. 언어: `typescript`
2. 프레임워크: `react`
3. 상태관리 라이브러리: `tanstack-query v5`
4. 스타일링: `emotion css`, `ik-ui-library`
```

`ik-ui-library`는 셀럽잇 프로젝트에서 사용한 제가 직접 만든 UI 라이브러리(https://github.com/turtle601/ik-ui-library)입니다.

## FSD

### 1. 아키텍처의 필요성을 느끼다.

- 이전 팀 프로젝트를 진행하면서 중구난방으로 선언되는 컴포넌트와 파일들 때문에 유지보수 및 코드를 예측하는 것이 굉장히 힘들었습니다.
  이를 해결하기 위해 각 폴더의 역할을 정하는 아키텍처 패턴을 적용하도록 결심했습니다.

### 2. FSD vs Atomic Design Pattern

| 구분   | FSD                     | 아토믹 디자인 패턴                 |
| ------ | ----------------------- | ---------------------------------- |
| 구조   | 기능 중심으로 폴더 구성 | 컴포넌트의 원자적 단위로 분류      |
| 확장성 | 기능별로 확장 용이      | 세세한 컴포넌트 관리로 확장성 좋음 |
| 복잡도 | 복잡한 기능에 적합      | 단순한 구조에 적합                 |

### ✅ 공통점

두 아키텍처 모두 모듈화와 계층 구조에 중점을 두며, 예측 가능하고 유지보수하기 쉬운 코드를 작성하는 데 도움을 줍니다.
예를 들어 아토믹 패턴에서는 원자(atom) → 분자(molecule) → 유기체(organism) 순으로 컴포넌트를 조립하며, 구조의 일관성을 유지합니다.
FSD 또한 상위 계층이 하위 계층만 의존하도록 규칙을 갖추고 있어 명확한 의존성 흐름을 보장합니다.

### ❗ 아토믹 디자인 패턴을 사용하지 않은 이유

아토믹 패턴은 이론적으로는 명확하지만, 실제로는 원자/분자/유기체의 구분 기준이 모호해질 수 있습니다.
명확한 기준이 없다면 오히려 레이어 분리에 혼란을 주고, 유지보수가 어려워질 수 있다고 판단했습니다.

### 🔍 FSD를 선택한 이유

FSD는 기능 중심으로 폴더를 구성하여,도메인 로직과 UI 컴포넌트,
공유 유틸리티와 개별 기능 모듈을 명확하게 분리할 수 있었습니다.
덕분에 팀원 간 협업이나 리팩토링 시에도 각 기능 단위로 독립적인 작업이 가능했고,
기능이 많고 복잡한 프로젝트에서 확장성과 유지보수성을 확보하는 데 적합하다고 판단해 FSD를 선택했습니다.

### FSD 적용 방식

`shared`, `entities`, `feature`, `pages`, `app` 으로 폴더를 분리, 계층화하였습니다. ( 자세한 내용은 [공식문서](https://feature-sliced.design/lander) 참조 )

```
app: 애플리케이션 초기화 및 글로벌 설정 (ex. provider, router 설정)

pages: 말 그대로 pages를 의미

features: 사용자 시나리오와 비즈니스 로직 기능을 담당하는 컴포넌트를 선언

*entities: 사용자 시나리오와 비즈니스 엔티티를 의미, 서버에서 받은 데이터와 기능들을 프론트엔드의 언어(상태)로 변경,
매핑하는 레이어로 구성했습니다. tanstack-query가 서버 상태를 의미하기 때문에 tanstack-query관련 로직을 주로 작성합니다.

shared: 공용 스타일, 공용 커스텀 훅, 공용 함수, 공용 UI 컴포넌트
```

## 에러 핸들링

### 에러 상황 분석

프로젝트 내부에서 에러가 발생할 수 있는 유형을 크게 두 가지로 구분할 수 있다.

1. API Request 에러
2. 런타임(코드 상) 에러

각 상황별로 어떻게 처리했는지 살펴보겠다.

### 1. API Request 에러

상황

- 서버 통신 중 fetch나 axios 요청이 실패할 때
- 네트워크 에러(오프라인 등)나, 서버 응답이 4xx/5xx로 정상적이지 않을 때
- 예: “리소스를 찾을 수 없습니다(404)”, “서버 에러(500)”, “네트워크 끊김”

대응 방법

- react-error-boundary의 ErrorBoundary를 사용
- API 요청이 실패하면 상황에 맞는 커스텀 에러 객체를 감싸서 어떤 에러인지 구분할 수 있도록 한다.

```ts
export const requestAPI = <T>(
  url: string,
  params?: URLSearchParams
): Promise<T> => {
  const fullUrl = params ? `${url}?${params.toString()}` : `${url}`;

  return new Promise((resolve, reject) => {
    fetch(fullUrl)
      .then((response) => {
        if (!response.ok) {
          reject(requestError({ error: new Error(REQUEST_ERROR_MESSAGE) }));
        }

        return response.json();
      })
      .then((data: T) => resolve(data))
      .catch((error) => {
        reject(networkError({ error }));
      });
  });
};
```

- AsynccBoundary를 구현, ErrorBoundary가 비동기 에러도 잡을 수 있도록, React 18에서 추가된 Suspense 패턴을 사용해 로딩/에러 처리를 한번에 관리합니다.

```tsx
interface IAsyncQueryBoundaryProps {
  errorFallback: (props: FallbackProps) => React.ReactNode;
  suspenseFallback: React.ReactNode;
  children: React.ReactNode;
}

function AsyncQueryBoundary({
  children,
  errorFallback,
  suspenseFallback,
}: IAsyncQueryBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={errorFallback}>
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncQueryBoundary;
```

### 1. 런타임 에러

상황

- 코드 자체에서 발생하는 오류, 예: TypeError, ReferenceError 등
- 잘못된 로직으로 인해 컴포넌트가 렌더링 도중 오류 발생

대응방법

- ErrorBoundary가 감싸고 있는 컴포넌트 내부라면, 해당 Boundary가 에러를 캐치해서 대체 UI를 보여줄 수 있습니다.
- ErrorBoundary 영역 밖에서 에러가 발생 시 React Router 6.4+에서는 errorElement를 통해 라우트 에러 처리

## 네이버 지도 마커 컴포넌트 설명

### Overlay

- 네이버 지도의 마커는 react의 생명주기로 인해 화면에 렌더링 되는 게 아니라
  특정 함수 호출(`marker.setMap(null)`, `maker.setMap(map)`)로 화면에 렌더링됩니다.

- 따라서 아래 코드와 같이 코드를 구성했습니다.

```tsx
import { useEffect } from 'react';

import { useMap } from '../../../model';

import type { MapElement } from '../type';

interface OverlayProps {
  element: MapElement;
  children: React.ReactNode;
}

function Overlay({ element, children }: OverlayProps) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    element.setMap(map);

    return () => {
      if (!map) return;

      element.setMap(null);
    };
  }, [map]);

  return <>{children}</>;
}

export default Overlay;
```

### BindEvent, Listener

- 네이버 지도 마커에 이벤트 리스너를 등록, 해제하는 컴포넌트입니다.
- Overlay의 마커 생성주기에 맞추기 위해 두 컴포넌트는 같이 사용됩니다.

### Marker

- naver.maps.Marker 객체에서 제공하는 ui 이벤트들을 Marker 컴포넌트에서 camelCase로 변환(ex. click -> onClick)하여 사용합니다.

- useState(() => new Marker(...))
  → 초기값 함수로 한 번만 생성되며, React의 리렌더링과 관계없이 같은 인스턴스를 유지합니다.

- forwardRef + useImperativeHandle
  → 부모 컴포넌트에서 <Marker ref={...} /> 형태로 naver.maps.Marker 인스턴스에 직접 접근 가능하게 만듭니다.

```tsx
import { forwardRef, useImperativeHandle, useState } from 'react';
import { BindEvent, Overlay } from '../../map';

export type uiEvents = [
  'mousedown',
  'mouseup',
  'click',
  'dblclick',
  'rightclick',
  'mouseover',
  'mouseout',
  'dragstart',
  'drag',
  'dragend'
];

export type UIEventHandlers<Events extends readonly string[]> = Partial<
  Record<
    `on${Capitalize<Events[number]>}`,
    (e: naver.maps.PointerEvent) => void
  >
>;

type MarkerProps = {
  options: Omit<naver.maps.MarkerOptions, 'map'>;
  events?: UIEventHandlers<uiEvents>;
};

const Marker = forwardRef<naver.maps.Marker, MarkerProps>((props, ref) => {
  const [marker] = useState(() => new naver.maps.Marker(props.options));
  useImperativeHandle(ref, () => marker);

  return (
    <Overlay element={marker}>
      <BindEvent element={marker} listeners={props.events} />
    </Overlay>
  );
});

export default Marker;
```

## 네이버 지도 마커 상태 관리

### 네이버 지도 기능 요구 사항

네이버 지도 요구 사항 중 일부분을 예시로 들겠습니다.

- [] 마커 클릭 시 마커 focus 효과 적용
- [] 다른 마커 클릭 시 기존 마커 focus 효과 해제

위의 요구사항을 구현하기 위해서는 하나의 클릭 이벤트 발생 시 하나의 마커 뿐만 아니라 다른 마커에 대한 상태도 변경을 해야합니다.

하지만 네이버 지도 API는 마커 상태를 중앙에서 관리할 수 있는 기능을 제공하지 않기 때문에, 별도의 상태 관리 방식이 필요합니다.

### useExtenalStore 사용 이유

- naver.maps.Marker 객체는 지도에 렌더링되기 위한 다양한 상태와 메서드를 포함하는 모델입니다.

- 특정 마커의 상태가 바뀌었을 때, 이를 기반으로 React 컴포넌트를 효율적으로 다시 렌더링하려면 useExternalStore가 유용합니다.

### 설계 방향의 변화

- 초기에는 naver.maps.Marker를 직접 override하여 상태를 조작하는 방식으로 설계하려 했습니다.

- 하지만 이 방식은 React와 Naver 지도 각각의 상태/뷰를 따로따로 관리하게 되어, 복잡성과 혼란이 커지는 문제가 있었습니다.

- 결국, 마커 상태도 React의 생명주기에 맞춰 관리하는 방향으로 전환했습니다. 이 방식은 마커 상태 변화와 React 컴포넌트 렌더링을 자연스럽게 연동할 수 있어, 상태 흐름의 일관성을 확보할 수 있었습니다.
