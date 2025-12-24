const terms = [
    {
        id: "gdp",
        term: "GDP (국내총생산)",
        image: "assets/gdp.png",
        definition: "쉽게 말해 '우리나라가 1년 동안 벌어들인 총 점수'예요. 집안으로 치면 1년 총수입 같은 거죠! 이게 높으면 나라 살림이 활발하다는 뜻이에요.",
        example: "한국의 GDP가 올랐다는 건 우리 기업들이 물건도 많이 팔고 맛있는 서비스도 많이 만들었다는 뜻이에요.",
        category: "기초 상식"
    },
    {
        id: "inflation",
        term: "인플레이션",
        image: "assets/inflation.png",
        definition: "물가가 솔솔 오르는 현상이에요. 자고 일어났더니 어제 1,000원 하던 과자가 오늘은 1,200원이 된 상황! 내 돈의 가치가 조금씩 떨어지는 거예요.",
        example: "짜장면 가격이 예전엔 500원이었는데 지금은 7,000원인 것도 인플레이션 때문이랍니다.",
        category: "기초 상식"
    },
    {
        id: "interest_rate",
        term: "금리 (이자율)",
        image: "assets/interest_rate.png",
        definition: "돈을 빌려줄 때 받는 '렌트비'라고 생각하면 쉬워요. 은행이 돈을 빌려주고 그 대가로 받는 수수료죠. 반대로 우리가 저금하면 은행이 우리에게 렌트비를 줘요.",
        example: "금리가 오르면 은행 이자가 많아져서 저축하고 싶어지지만, 대출받은 사람들은 이자 부담이 커져요.",
        category: "금융/은행"
    },
    {
        id: "common_sense_1",
        term: "IPO (기업공개)",
        image: "assets/ipo.png",
        definition: "회사가 '우리 이제 주식 시장에 나가서 동네 사람들한테 투자받을게요!'라고 처음 선언하는 날이에요. 회사가 어른이 되어 사회로 나가는 잔칫날 같죠.",
        example: "유명한 게임 회사가 IPO를 하면 전 국민이 그 회사 주식을 사려고 줄을 서기도 해요.",
        category: "주식"
    },
    {
        id: "common_sense_2",
        term: "복리",
        image: "assets/compound_interest.png",
        definition: "이자에 또 이자가 붙는 마법이에요! 눈덩이를 굴리면 커지듯, 처음엔 조금씩 늘어나다가 나중에는 눈덩이처럼 불어나죠. 아인슈타인이 세계 8대 불가사의라고 불렀대요.",
        example: "매달 조금씩 꾸준히 저축하면 복리의 마법 덕분에 나중에 엄청난 큰돈이 될 수 있어요.",
        category: "금융/재테크"
    },
    {
        id: "common_sense_3",
        term: "유동성",
        image: "assets/liquidity.png",
        definition: "내가 가진 자산을 얼마나 빨리 '현금'으로 바꿀 수 있느냐는 거예요. 현금은 유동성 끝판왕! 반대로 집은 팔기까지 오래 걸리니 유동성이 낮다고 해요.",
        example: "급하게 돈이 필요할 땐 유동성이 높은 주식이나 예금이 부동산보다 훨씬 든든해요.",
        category: "금융"
    },
    {
        id: "common_sense_4",
        term: "코스피 (KOSPI)",
        image: "assets/kospi.png",
        definition: "우리나라의 가장 큰 주식 시장 이름이에요. 삼성전자 같은 덩치 큰 형님 회사들이 모여 있어서 우리나라 경제의 온도계 역할을 한답니다.",
        example: "오늘 코스피가 올랐다는 뉴스는 우리나라 대표 기업들의 가치가 전반적으로 좋아졌다는 의미예요.",
        category: "주식"
    },
    {
        id: "supply_demand",
        term: "수요와 공급",
        image: "assets/supply_demand.png",
        definition: "시장에서 가격이 결정되는 가장 기본 원리예요! '사고 싶은 마음(수요)'과 '팔고 싶은 양(공급)'이 줄다리기를 하며 딱 맞는 가격을 찾아가는 과정이죠.",
        example: "딸기가 제철이라 공급이 많아지면 가격이 내려가고, 모두가 딸기를 찾아서 수요가 많아지면 가격이 올라가요.",
        category: "미시경제"
    },
    {
        id: "opportunity_cost",
        term: "기회비용",
        image: "assets/opportunity_cost.png",
        definition: "하나를 선택하면 포기해야 하는 '다른 것의 가치'예요. 세상에 공짜는 없죠! 짜장면을 먹기로 했다면 짬뽕을 먹었을 때의 행복을 포기한 거예요.",
        example: "지금 공부하는 시간의 기회비용은 친구와 놀면서 보낼 수 있었던 즐거움이에요. 그래서 공부가 더 귀중한 거죠!",
        category: "미시경제"
    },
    {
        id: "bull_market",
        term: "불마켓 (상승장)",
        image: "assets/bull_market.png",
        definition: "주가가 쭉쭉 올라가는 기분 좋은 시장이에요. 힘찬 황소가 뿔을 위로 치받는 모습 같다고 해서 불(Bull)마켓이라고 불러요.",
        example: "모두가 싱긍벙글 웃으며 주식을 사는 때는 보통 불마켓일 가능성이 높아요.",
        category: "주식"
    },
    {
        id: "bear_market",
        term: "베어마켓 (하락장)",
        image: "assets/bear_market.png",
        definition: "주가가 힘없이 떨어지는 우울한 시장이에요. 곰이 앞발을 아래로 내리치는 모습 같다고 해서 베어(Bear)마켓이라고 불러요.",
        example: "베어마켓 때는 주식 투자를 조금 쉬어가거나 멀리 내다보는 인내심이 필요해요.",
        category: "주식"
    },
    {
        id: "exchange_rate",
        term: "환율",
        image: "assets/exchange_rate.png",
        definition: "우리나라 돈과 외국 돈을 바꾸는 비율이에요. '미국 1달러랑 우리 돈 1,300원이랑 바꿔!' 하는 식이죠. 여행 갈 때 아주 중요해요.",
        example: "환율이 오르면 외국 여행 갈 때 환전하는 게 더 비싸져서 지갑이 얇아져요.",
        category: "기초 상식"
    },
    {
        id: "dividend",
        term: "배당금",
        image: "assets/dividend.png",
        definition: "회사가 돈을 잘 벌어서 주주들에게 '투자해주셔서 감사해요'하고 나눠주는 보너스예요. 주식을 갖고만 있어도 들어오는 용돈 같은 거죠.",
        example: "은행 예금 이자처럼 꼬박꼬박 배당금을 주는 회사 주식을 '배당주'라고 불러요.",
        category: "주식"
    },
    {
        id: "official_1",
        term: "3층 연금체계",
        image: "assets/pension.png",
        definition: "행복한 노후를 위해 준비하는 '3단계 도시락' 같은 거예요! 1층(국가)은 기본 반찬, 2층(회사)은 든든한 메인 요리, 3층(나)은 달콤한 디저트라고 생각하면 돼요.",
        example: "국민연금, 퇴직연금, 개인연금을 모두 준비하면 아주 든든한 3층 도시락이 완성된답니다.",
        category: "기획재정부 추천"
    },
    {
        id: "official_2",
        term: "마케팅 4P",
        image: "assets/marketing_4p.png",
        definition: "물건을 잘 팔기 위한 4가지 마법 재료예요! 좋은 제품(Product), 적당한 가격(Price), 팔기 좋은 장소(Place), 멋진 홍보(Promotion)를 잘 섞어야 하죠.",
        example: "맛있는 떡볶이를(P) 싼 가격에(P) 학교 앞에서(P) 인스타 홍보로(P) 파는 것이 4P 전략이에요.",
        category: "기획재정부 추천"
    },
    {
        id: "official_3",
        term: "4차 산업혁명",
        image: "assets/fourth_industrial_revolution.png",
        definition: "인공지능, 로봇, 사물인터넷이 우리 삶과 하나가 되는 대변화예요. 마치 스마트폰이 우리 손의 일부가 된 것처럼, 모든 사물이 똑똑해지는 시대를 말해요.",
        example: "자율주행 자동차나 내 말을 알아듣는 AI 스피커가 바로 4차 산업혁명의 친구들이에요.",
        category: "기획재정부 추천"
    }
];
