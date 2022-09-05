# VercelPractice
Vercel을 이용하여 VanillaJS Todo 앱을 배포하는 과정

## Visit (실행 가능 사이트)
https://vercel-practice-kuman514.vercel.app/

## Information (정보)
- 배포 브랜치: `deploy`

## Deploy log (배포 기록)
- Sep 03 2022: 최초 테스트용 배포
- Sep 04 2022: 자바스크립트 동작 테스트 배포

## Convention (규칙)
- 함수는 특별한 경우(예: `.bind(this)`가 필요한 경우)가 아니면 반드시 화살표 함수를 사용한다.
- `tabstop: 2`
- 다음과 같은 형태를 지킨다.
  - `object`나 `array`의 경우
    ```JavaScript
    const example1 = { a: 1, b : 2 };
    const example2 = {
      a: 1,
      b: 2,
      c: 3,
    };
    const example3 = [ 1, 2, 3, 4 ];
    const example4 = {
      1,
      2,
      3,
      4,
    };
    ```
  - 화살표 함수
    ```JavaScript
    const example5 = (a, b, c) => {
      foo(a);
      const d = bar(b, c);
      return;
    };
    ```
- `object`로부터 할당받을 때 되도록 구조 분해 할당을 쓴다.
