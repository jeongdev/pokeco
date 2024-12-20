import React from "react";

const H3 = ({ children }: { children: string }): JSX.Element => {
  return <h3 className="text-lg mb-2 font-semibold">{children}</h3>;
};

export default function MyCaresheet(): JSX.Element {
  return (
    <article className="flex flex-col gap-8 mb-10">
      <section>
        <H3>사육장</H3>
        <p>
          적재형 케이지를 사용합니다. 10그램 이하의 아이들은 JIF 소, 소롱, 중,
          레파즈 소 크기의 사육장을 사용하고, 그 이상이 되면 JIF 대자로
          옮겨줍니다. 사육장 사이즈에는 정답이 없으므로, 너무 좁아 보인다면
          사육자가 판단해 사이즈를 키워주는 것이 좋습니다. 예민한 아이들 중
          일부는 너무 큰 집에 들어가면 예민해지거나 식사를 거부하는 경우도
          있습니다. 개인적으로는 중간 크기는 빠르게 성장하는 시기에 금방 좁아질
          수 있으므로, 넉넉한 소자(JIF 소롱, 레파즈 소 등)에서 어느 정도 키운 후
          바로 대자로 옮기는 것을 추천드립니다. 처음 키우시는 경우, 사육장을
          미처 준비하지 못했다면 베이비는 소자, 아성체 이상의 경우는 적재형
          대자를 구매해 사용하시다가 나중에 아크릴이나 유리 사육장으로 바꾸는
          것을 추천드립니다. 이는 비교적 저렴하며, 중고로 판매하기도 좋기
          때문입니다.
        </p>
      </section>
      <section>
        <H3>밥</H3>
        <p>
          판게아 브리딩 포뮬러를 주 3회, 몸무게의 5-10% 정도 급여하고 있습니다.
          몸무게가 유동적이므로 몇 밀리그램씩 정확히 먹였는지에 크게 신경
          쓰기보다는, 위에서 보았을 때 배가 머리 너비보다 더 나오지 않도록
          체형을 보면서 급여하는 편입니다. 과식을 주의하며, 만약 과식을 했다고
          판단될 경우에는 다음 급여 시 평소보다 적은 양을 줍니다. 성체는 최대
          2밀리미터 정도 자율 급여하되, 산란하는 암컷의 경우 체형을 고려해
          2.5-3밀리미터까지 줄 수 있습니다. 겨울철에는 대사가 떨어지므로 성체는
          주 2회 급여합니다. 농도는 브리딩 포뮬러 기준으로 '케첩 농도'로, 너무
          묽지 않게 준비해 줍니다.
        </p>
      </section>
      <section>
        <H3>충식</H3>
        <p>
          10마리 단위로 소량 판매하는 샵에서 간헐적으로 급여합니다. D3가 포함된
          칼슘을 사용합니다. 아직 먹이를 잘 먹지 않거나 베이비인 경우, 또는
          크기에 비해 귀뚜라미가 너무 큰 경우에는 다리와 머리를 떼고 몸통만
          급여하며, 잘 먹는 아이들은 머리만 눌러서 먹이기도 합니다.
        </p>
      </section>
      <section>
        <H3>환경</H3>
        <p>
          한겨울에도 환기는 최우선으로 생각하여 몇 분이라도 환기를 시킵니다.
          온도는 21-29도 사이로 비교적 폭넓게 유지합니다. (그 이상 또는 이하가
          되면 사람이 힘들어서요...) 습도는 특별히 신경 쓰지 않지만 여름
          장마철처럼 습할 때는 아침 분무를 생략하고, 겨울에 습도가 30-40% 정도로
          건조해지면 가습기를 사용합니다. 온도계는 실외에 1개만 둡니다.
          크레들에게는 각자 물그릇을 한 개씩 제공하고, 하루 이틀마다 물을 교체해
          줍니다.
        </p>
      </section>
    </article>
  );
}
