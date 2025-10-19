// --- 게임 설정 ---
            const characters = [
                // name(고유), baseName, rarity, faction, stats, imageUrl, cardImageUrl, dialogues, skills, deathDialogue, story
                { name: '[소설가] 서도진', baseName: '서도진', rarity: 'N', faction: '탐정', stats: { hp: 50, atk: 5, def: 5 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=서도진', dialogues: ['이야기의 시작은...'], skills: [{ name: '고뇌', dialogue: '음...', power: 1.2, type: 'damage' }], deathDialogue: '마감이...', story: `서재에 앉아 잉크 냄새를 맡는 것이 세상에서 가장 큰 행복이었던 남자, 서도진. 그는 베스트셀러 작가였지만, 세상의 명성보다는 자신만의 이야기 세계에 침잠하는 것을 더 즐겼다. 그의 손끝에서 태어나는 문장들은 때로는 날카로운 추리가 되고, 때로는 비극적인 사랑이 되었다. 독자들은 그의 이야기에 열광했지만, 정작 그 자신은 자신의 이야기가 현실을 침범하리라고는 상상조차 하지 못했다.\n\n그의 서재는 고요했다. 창밖의 도시 소음만이 희미하게 들려올 뿐, 공간을 채우는 것은 오직 오래된 종이 냄새와 그가 내쉬는 깊은 한숨뿐이었다. 벽면을 가득 채운 책들은 그가 걸어온 길이자, 앞으로 나아갈 길을 비추는 등대였다. 하지만 오늘따라 그 등대는 희미했다. 다음 작품의 마감이 코앞이었지만, 이야기의 마지막 조각이 맞춰지지 않았다. 마치 안개 속을 헤매는 기분이었다. 그의 주인공은 범인의 그림자를 쫓고 있었지만, 그 그림자는 손에 잡힐 듯 잡히지 않고 교묘하게 빠져나갔다. "젠장, 이럴 때가 아닌데..." 그는 헝클어진 머리를 거칠게 쓸어 넘겼다.[PAGE_BREAK]그러던 어느 날, 그의 오랜 친구이자 경쟁자였던 작가가 싸늘한 시신으로 발견되었다. 현장은 마치 소설의 한 장면처럼 기묘하게 꾸며져 있었고, 경찰은 단순 사고로 종결하려 했다. 하지만 서도진은 직감했다. 이것은 사고가 아니다. 누군가가 의도적으로 만들어낸, 잔혹한 이야기의 시작이라는 것을. 그는 친구의 억울한 죽음의 진실을 밝히기 위해, 그리고 자신의 이야기가 더는 더럽혀지는 것을 막기 위해 직접 사건에 뛰어들기로 결심한다. 그의 손에는 만년필 대신, 차가운 루페가 들려 있었다.` },
                { name: '[탐정] 서도진', baseName: '서도진', rarity: 'R', faction: '탐정', stats: { hp: 100, atk: 15, def: 10 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=서도진', dialogues: ['사건 현장은 보존해주시죠.'], skills: [{ name: '추리', dialogue: '범인은 바로 당신!', power: 1.5, type: 'damage' }], deathDialogue: '이런... 실수를...', story: '사건을 파헤치기 위해, 그는 펜 대신 돋보기를 들었다. 그의 날카로운 시선은 거짓을 꿰뚫는다.' },
                { name: '[악몽] 서도진', baseName: '서도진', rarity: 'SR', faction: '탐정', stats: { hp: 200, atk: 30, def: 15 }, imageUrl: 'https://placehold.co/300x500/718096/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/718096/ffffff?text=서도진', dialogues: ['자, 내 소설의 다음 페이지를 넘겨볼까?'], skills: [{ name: '현실 침식', dialogue: '이게 꿈이 아니라고 확신할 수 있나?', power: 1.8, type: 'damage' }], deathDialogue: '이 악몽은... 이제 시작일 뿐이야...', story: '그가 쓴 소설은 단순한 이야기가 아니다. 독자의 마음속 가장 깊은 공포를 파고드는 현실의 악몽 그 자체다. 그는 자신의 펜 끝에서 벌어지는 비극을 즐긴다.' },
                { name: '[작가의 우울] 서도진', baseName: '서도진', rarity: 'SSR', faction: '탐정', stats: { hp: 380, atk: 42, def: 28 }, imageUrl: 'https://placehold.co/300x500/4a5568/ffffff?text=서도진', cardImageUrl: 'https://placehold.co/150x180/4a5568/ffffff?text=서도진', dialogues: ['이야기의 끝은... 언제나 비극이지.'], skills: [{ name: '행간 읽기', dialogue: '모든 비극엔 이유가 있는 법.', power: 2.2, type: 'damage' }, { name: '에필로그', dialogue: '이제, 이 이야기의 막을 내리죠.', power: 1.5, type: 'debuff_def' }], deathDialogue: '결국... 나 또한 이야기의 일부였을 뿐인가...', story: '범인의 마음을 너무 깊이 이해해버린 천재 작가. 그는 사건의 진실을 꿰뚫어 볼수록, 인간 내면의 깊은 어둠과 마주하며 끝없는 우울에 잠긴다.', enhancementSuccessDialogue: '이것이... 이야기의 새로운 경지로군.'},
                { name: '[편집자] 윤필규', baseName: '윤필규', rarity: 'N', faction: '조수', stats: { hp: 60, atk: 8, def: 3 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=윤필규', dialogues: ['오타입니다.'], skills: [{ name: '교정', dialogue: '이 문장은 틀렸습니다.', power: 1.3, type: 'damage' }], deathDialogue: '마감만은... 제발...', story: '그저 성실한 편집자일 뿐이었다. 담당 작가의 사건에 휘말리기 전까진.' },
                { name: '[조수] 윤필규', baseName: '윤필규', rarity: 'R', faction: '조수', stats: { hp: 110, atk: 14, def: 11 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=윤필규', dialogues: ['제가 돕겠습니다.'], skills: [{ name: '자료 조사', dialogue: '찾았습니다!', power: 1.4, type: 'damage' }], deathDialogue: '죄송합니다...', story: '어리숙해 보이지만, 그의 꼼꼼함은 사건 해결의 중요한 실마리가 된다.' },
                { name: '[동거인] 윤필규', baseName: '윤필규', rarity: 'SR', faction: '조수', stats: { hp: 240, atk: 26, def: 19 }, imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=윤필규', dialogues: ['집세... 잊지 않으셨죠?'], skills: [{ name: '잔소리', dialogue: '방 좀 치우세요!', power: 1.9, type: 'damage' }], deathDialogue: '그래도... 즐거웠어...', story: '사건에 휘말린 작가와 함께 살며, 본의 아니게 사건의 중심에 서게 된다.' },
                { name: '[올곧은 정의] 윤필규', baseName: '윤필규', rarity: 'SSR', faction: '조수', stats: { hp: 370, atk: 43, def: 29 }, imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤필규', cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=윤필규', dialogues: ['진실을 외면할 순 없습니다.'], skills: [{ name: '내부고발', dialogue: '제가 모든 것을 밝히겠습니다.', power: 2.4, type: 'damage' }, { name: '굳은 의지', dialogue: '저는 꺾이지 않습니다!', power: 1.8, type: 'vampire' }], deathDialogue: '정의는... 살아있다...', story: '평범했던 그는, 수많은 불의를 목격하며 스스로가 정의의 목소리가 되기로 결심했다.' },
                { name: '[연구자] 윤서천', baseName: '윤서천', rarity: 'N', faction: '조수', stats: { hp: 45, atk: 9, def: 4 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=윤서천', dialogues: ['흥미로운 샘플이군.'], skills: [{ name: '분석', dialogue: '결과가 나왔군.', power: 1.3, type: 'damage' }], deathDialogue: '데이터가... 부족해...', story: '그의 연구 노트에는 이해할 수 없는 화학식들만 가득했다.' },
                { name: '[범인] 윤서천', baseName: '윤서천', rarity: 'R', faction: '범인', stats: { hp: 100, atk: 17, def: 9 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=윤서천', dialogues: ['계획通り...'], skills: [{ name: '독극물', dialogue: '치사량이야.', power: 1.6, type: 'damage' }], deathDialogue: '계획에 없었는데...', story: '천재적인 두뇌는 때로는 위험한 방향으로 흐르기도 한다.' },
                { name: '[실험쥐] 윤서천', baseName: '윤서천', rarity: 'SR', faction: '범인', stats: { hp: 260, atk: 24, def: 17 }, imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=윤서천', dialogues: ['이 주사... 정말 괜찮은 건가?'], skills: [{ name: '이상 반응', dialogue: '몸이... 뜨거워...!', power: 2.0, type: 'damage' }], deathDialogue: '결과는... 실패인가...', story: '스스로를 실험체로 삼는 것. 그것은 광기인가, 아니면 위대한 희생인가.' },
                { name: '[in vivo] 윤서천', baseName: '윤서천', rarity: 'SSR', faction: '탐정', stats: { hp: 340, atk: 48, def: 24 }, imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=윤서천', cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=윤서천', dialogues: ['인류를 위한 희생이다.'], skills: [{ name: '임상실험', dialogue: '넌 훌륭한 샘플이야.', power: 2.5, type: 'damage' }, { name: '부작용', dialogue: '예상 밖인데!', power: 1.4, type: 'debuff_def' }], deathDialogue: '최고의... 샘플이었는데...', story: '그는 자신의 연구가 세상을 구원할 것이라 굳게 믿고 있다. 그 과정에서 발생하는 사소한 희생은 어쩔 수 없다고 생각한다.' },
                { name: '[서점 주인] 한 현', baseName: '한 현', rarity: 'N', faction: '조수', stats: { hp: 70, atk: 6, def: 6 }, imageUrl: 'https://placehold.co/300x500/a0aec0/ffffff?text=한현', cardImageUrl: 'https://placehold.co/150x180/a0aec0/ffffff?text=한현', dialogues: ['어서오세요.'], skills: [{ name: '책 추천', dialogue: '이건 어떠신지?', power: 1.1, type: 'damage' }], deathDialogue: '가게는... 누가...', story: '동네의 작은 서점을 운영하는 평범한 청년. 그가 숨겨진 과거를 가지고 있다는 사실을 아는 이는 거의 없다.' },
                { name: '[조수] 한 현', baseName: '한 현', rarity: 'R', faction: '조수', stats: { hp: 140, atk: 14, def: 13 }, imageUrl: 'https://placehold.co/300x500/63b3ed/ffffff?text=한현', cardImageUrl: 'https://placehold.co/150x180/63b3ed/ffffff?text=한현', dialogues: ['제가 가보겠습니다.'], skills: [{ name: '현장 조사', dialogue: '뭔가 있군요.', power: 1.4, type: 'damage' }], deathDialogue: '제가... 너무 나섰나요...', story: '사건의 진상을 파헤치는 탐정을 보며, 그는 잊고 있던 과거의 자신을 떠올린다.' },
                { name: '[동행인] 한 현', baseName: '한 현', rarity: 'SR', faction: '조수', stats: { hp: 230, atk: 28, def: 20 }, imageUrl: 'https://placehold.co/300x500/b794f4/ffffff?text=한현', cardImageUrl: 'https://placehold.co/150x180/b794f4/ffffff?text=한현', dialogues: ['혼자 가게 둘 순 없죠.'], skills: [{ name: '엄호', dialogue: '뒤는 맡겨주세요!', power: 1.7, type: 'damage' }], deathDialogue: '먼저... 가세요...', story: '위험한 길이라는 것을 알면서도, 그는 동료를 위해 기꺼이 그 길에 함께 오른다.' },
                { name: '[한때는, 탐정] 한 현', baseName: '한 현', rarity: 'SSR', faction: '탐정', stats: { hp: 390, atk: 40, def: 30 }, imageUrl: 'https://placehold.co/300x500/f6e05e/000000?text=한현', cardImageUrl: 'https://placehold.co/150x180/f6e05e/000000?text=한현', dialogues: ['오랜만이군, 이 감각.'], skills: [{ name: '오래된 통찰', dialogue: '범인은... 이 안에 없어.', power: 2.2, type: 'damage' }, { name: '감싸기', dialogue: '더는 다치게 둘 수 없지!', power: 1.9, type: 'vampire' }], deathDialogue: '결국... 여기까지인가...', story: '과거의 명성을 뒤로 하고 평범한 삶을 택했던 그. 하지만 눈앞의 사건은 그를 다시 탐정의 길로 이끈다.' },
                // ==================== 도천영 ====================
                { name: '[연구자] 도천영', baseName: '도천영', rarity: 'N', faction: '탐정', stats: { hp: 65, atk: 7, def: 5 }, imageUrl: 'https://placehold.co/300x500/4fd1c5/ffffff?text=도천영', cardImageUrl: 'https://placehold.co/150x180/4fd1c5/ffffff?text=도천영', dialogues: ['가설을 세워보죠.'], skills: [{ name: '데이터 분석', dialogue: '변수를 통제해야 합니다.', power: 1.1, type: 'damage' }], deathDialogue: '데이터가... 부족했어...', story: '세상의 모든 현상을 데이터로 이해하려는 냉철한 연구자. 그의 연구실은 언제나 서늘한 공기가 감돈다.' },
                { name: '[탐정] 도천영', baseName: '도천영', rarity: 'R', faction: '탐정', stats: { hp: 130, atk: 15, def: 12 }, imageUrl: 'https://placehold.co/300x500/319795/ffffff?text=도천영', cardImageUrl: 'https://placehold.co/150x180/319795/ffffff?text=도천영', dialogues: ['현장은 거짓말을 하지 않습니다.'], skills: [{ name: '증거 수집', dialogue: '이건... 흥미롭군요.', power: 1.4, type: 'damage' }], deathDialogue: '이런 변수는... 계산에 없었는데...', story: '사건 현장을 하나의 거대한 실험실로 간주한다. 그에게 미제 사건이란 아직 증명되지 않은 가설일 뿐이다.' },
                { name: '[in vitro] 도천영', baseName: '도천영', rarity: 'SR', faction: '탐정', stats: { hp: 220, atk: 29, def: 19 }, imageUrl: 'https://placehold.co/300x500/086f83/ffffff?text=도천영', cardImageUrl: 'https://placehold.co/150x180/086f83/ffffff?text=도천영', dialogues: ['자, 실험을 시작하죠.'], skills: [{ name: '가설 검증', dialogue: '결과는 명확하군요.', power: 1.8, type: 'damage' }], deathDialogue: '오염... 됐어...', story: '통제된 환경, 완벽한 변수 통제 하에 진실을 규명한다. 그의 손끝에서 벌어지는 작은 실험은 사건 전체를 뒤흔든다.' },
                // ==================== 박연우 ====================
                { name: '[연구자] 박연우', baseName: '박연우', rarity: 'N', faction: '탐정', stats: { hp: 75, atk: 5, def: 6 }, imageUrl: 'https://placehold.co/300x500/f6ad55/ffffff?text=박연우', cardImageUrl: 'https://placehold.co/150x180/f6ad55/ffffff?text=박연우', dialogues: ['기초부터 차근차근.'], skills: [{ name: '문헌 조사', dialogue: '선행 연구를 참고하죠.', power: 1.1, type: 'damage' }], deathDialogue: '아직...이었는데...', story: '언제나 미소를 잃지 않는 긍정적인 성격의 유기화학 연구자. 복잡한 화학 구조식 속에서 아름다움을 찾는다.' },
                { name: '[탐정] 박연우', baseName: '박연우', rarity: 'R', faction: '탐정', stats: { hp: 150, atk: 12, def: 14 }, imageUrl: 'https://placehold.co/300x500/dd6b20/ffffff?text=박연우', cardImageUrl: 'https://placehold.co/150x180/dd6b20/ffffff?text=박연우', dialogues: ['조각들을 맞춰볼까요?'], skills: [{ name: '알리바이 분석', dialogue: '이 시간엔... 이게 불가능해요.', power: 1.4, type: 'damage' }], deathDialogue: '마지막 퍼즐이...', story: '흩어진 단서들을 모아 하나의 진실로 완성시키는 과정을 즐긴다. 그에게 사건 해결은 곧 완벽한 분자를 합성하는 것과 같다.' },
                { name: '[total synthesis] 박연우', baseName: '박연우', rarity: 'SR', faction: '탐정', stats: { hp: 240, atk: 25, def: 22 }, imageUrl: 'https://placehold.co/300x500/c05621/ffffff?text=박연우', cardImageUrl: 'https://placehold.co/150x180/c05621/ffffff?text=박연우', dialogues: ['자, 모든 것이 모였습니다.'], skills: [{ name: '전합성', dialogue: '이것이 바로 진실의 구조입니다!', power: 1.8, type: 'damage' }], deathDialogue: '반응이... 멈췄어...', story: '아무것도 없는 곳에서 시작하여 단 하나의 완벽한 진실을 구축해낸다. 그의 통찰력은 사건의 전모를 꿰뚫는다.' },
                // ==================== 강은율 ====================
                { name: '[연구자] 강은율', baseName: '강은율', rarity: 'N', faction: '조수', stats: { hp: 60, atk: 8, def: 5 }, imageUrl: 'https://placehold.co/300x500/76e4f7/000000?text=강은율', cardImageUrl: 'https://placehold.co/150x180/76e4f7/000000?text=강은율', dialogues: ['시뮬레이션을 돌려보겠습니다.'], skills: [{ name: '모델링', dialogue: '예상 결과는 이렇습니다.', power: 1.1, type: 'damage' }], deathDialogue: '계산 오류인가...', story: '컴퓨터와 숫자를 더 신뢰하는 계산화학 연구자. 복잡한 현실보다는 깔끔한 가상 세계에서의 계산을 선호한다.' },
                { name: '[조수] 강은율', baseName: '강은율', rarity: 'R', faction: '조수', stats: { hp: 125, atk: 16, def: 11 }, imageUrl: 'https://placehold.co/300x500/0bc5ea/ffffff?text=강은율', cardImageUrl: 'https://placehold.co/150x180/0bc5ea/ffffff?text=강은율', dialogues: ['필요한 정보는 전부 모았습니다.'], skills: [{ name: '정보 처리', dialogue: '여기서 유의미한 패턴이...', power: 1.4, type: 'damage' }], deathDialogue: '제 정보가... 틀렸을 리 없는데...', story: '탐정의 요청에 따라 방대한 양의 데이터를 수집하고 분석하며 그의 활동을 돕는다. 여전히 사람보단 숫자를 믿는다.' },
                { name: '[in silico] 강은율', baseName: '강은율', rarity: 'SR', faction: '조수', stats: { hp: 210, atk: 30, def: 18 }, imageUrl: 'https://placehold.co/300x500/0987a0/ffffff?text=강은율', cardImageUrl: 'https://placehold.co/150x180/0987a0/ffffff?text=강은율', dialogues: ['모든 경우의 수를 예측했습니다.'], skills: [{ name: '예측 분석', dialogue: '범인은, 그리로 갈 겁니다.', power: 1.8, type: 'damage' }], deathDialogue: '최적해가... 아니었단 말인가...', story: '사건의 모든 정보를 데이터로 변환하여 가장 가능성이 높은 진실을 도출해낸다. 그의 예측은 거의 빗나가는 법이 없다.' },
                // ==================== 백정문 ====================
                { name: '[연구자] 백정문', baseName: '백정문', rarity: 'N', faction: '탐정', stats: { hp: 70, atk: 6, def: 6 }, imageUrl: 'https://placehold.co/300x500/fbb6ce/000000?text=백정문', cardImageUrl: 'https://placehold.co/150x180/fbb6ce/000000?text=백정문', dialogues: ['에너지를 측정해보죠.'], skills: [{ name: '분광학', dialogue: '빛이 모든 걸 말해줄 겁니다.', power: 1.1, type: 'damage' }], deathDialogue: '에너지가... 부족해...', story: '들뜬 상태의 분자를 연구하는 물리화학자. 평소엔 차분하지만, 흥미로운 현상을 발견하면 누구보다 뜨거워진다.' },
                { name: '[탐정] 백정문', baseName: '백정문', rarity: 'R', faction: '탐정', stats: { hp: 140, atk: 14, def: 13 }, imageUrl: 'https://placehold.co/300x500/f687b3/ffffff?text=백정문', cardImageUrl: 'https://placehold.co/150x180/f687b3/ffffff?text=백정문', dialogues: ['보이지 않는 에너지가 느껴지는군요.'], skills: [{ name: '열 추적', dialogue: '아직... 온기가 남아있어.', power: 1.4, type: 'damage' }], deathDialogue: '결정적인 순간에...', story: '사건 현장에 남은 미세한 에너지의 흔적을 쫓아 진실에 다가간다. 그의 눈에는 보이지 않는 것들이 보인다.' },
                { name: '[삼중항] 백정문', baseName: '백정문', rarity: 'SR', faction: '탐정', stats: { hp: 230, atk: 28, def: 20 }, imageUrl: 'https://placehold.co/300x500/d53f8c/ffffff?text=백정문', cardImageUrl: 'https://placehold.co/150x180/d53f8c/ffffff?text=백정문', dialogues: ['자, 들떠볼 시간입니다!'], skills: [{ name: '인광(燐光)', dialogue: '숨어있는 진실을 비춰라!', power: 1.8, type: 'damage' }], deathDialogue: '다시... 바닥상태로...', story: '사건이 교착 상태에 빠졌을 때, 그는 평범한 상태에서는 보이지 않는 진실을 꿰뚫어 보는 힘을 발휘한다.' },
                // ==================== 독고유진 ====================
                { name: '[소설가] 독고유진', baseName: '독고유진', rarity: 'N', faction: '조수', stats: { hp: 80, atk: 6, def: 5 }, imageUrl: 'https://placehold.co/300x500/9f7aea/ffffff?text=독고유진', cardImageUrl: 'https://placehold.co/150x180/9f7aea/ffffff?text=독고유진', dialogues: ['재미있는 이야기네요.'], skills: [{ name: '인물 설정', dialogue: '그 사람은... 그런 말을 할 리가 없어요.', power: 1.1, type: 'damage' }], deathDialogue: '결말이... 이래선 안되는데...', story: '사람들의 이야기를 듣고 쓰는 것을 좋아하는 미스터리 소설가. 그의 상상력은 때로 현실보다 더 현실 같다.' },
                { name: '[조수] 독고유진', baseName: '독고유진', rarity: 'R', faction: '조수', stats: { hp: 160, atk: 13, def: 13 }, imageUrl: 'https://placehold.co/300x500/805ad5/ffffff?text=독고유진', cardImageUrl: 'https://placehold.co/150x180/805ad5/ffffff?text=독고유진', dialogues: ['다음 이야기가 궁금해졌거든요.'], skills: [{ name: '복선 파악', dialogue: '이건 그때 그 사건과 이어져있어!', power: 1.4, type: 'damage' }], deathDialogue: '제가... 너무 깊이 들어왔나요...', story: '자신이 쓰던 소설보다 더 소설 같은 현실의 사건에 휘말린다. 그는 이야기의 끝을 보기 위해 탐정과 동행하기로 한다.' },
                { name: '[무사] 독고유진', baseName: '독고유진', rarity: 'SR', faction: '조수', stats: { hp: 250, atk: 30, def: 18 }, imageUrl: 'https://placehold.co/300x500/553c9a/ffffff?text=독고유진', cardImageUrl: 'https://placehold.co/150x180/553c9a/ffffff?text=독고유진', dialogues: ['이야기를 지키기 위해서라면.'], skills: [{ name: '일필휘지(一筆揮之)', dialogue: '이 검으로, 결말을 쓰겠다!', power: 1.8, type: 'damage' }], deathDialogue: '여기까지가... 제 이야기인가 봅니다...', story: '그가 쓰는 것은 더 이상 펜이 아니다. 소중한 사람들과 자신이 만든 이야기를 지키기 위해, 그는 잊고 있던 검을 다시 잡았다.' },
                // ==================== 양석민 ====================
                { name: '[연구자] 양석민', baseName: '양석민', rarity: 'N', faction: '탐정', stats: { hp: 70, atk: 7, def: 5 }, imageUrl: 'https://placehold.co/300x500/38a169/ffffff?text=양석민', cardImageUrl: 'https://placehold.co/150x180/38a169/ffffff?text=양석민', dialogues: ['흐름을 읽어야 합니다.'], skills: [{ name: '촉매 작용', dialogue: '반응을 이끌어내죠.', power: 1.1, type: 'damage' }], deathDialogue: '길을... 잃었군...', story: '반응의 경로를 설계하고 예측하는 것을 전문으로 하는 연구원. 언제나 가장 효율적인 길을 찾으려 노력한다.' },
                { name: '[탐정] 양석민', baseName: '양석민', rarity: 'R', faction: '탐정', stats: { hp: 145, atk: 15, def: 11 }, imageUrl: 'https://placehold.co/300x500/2f855a/ffffff?text=양석민', cardImageUrl: 'https://placehold.co/150x180/2f855a/ffffff?text=양석민', dialogues: ['사건의 흐름이 보입니다.'], skills: [{ name: '경로 예측', dialogue: '범인은 분명 그곳으로 향했을 겁니다.', power: 1.4, type: 'damage' }], deathDialogue: '예상치 못한... 경로였습니다...', story: '용의자의 행동 패턴과 사건의 전개 과정을 분석하여 다음 단계를 예측한다. 그의 예측은 대부분 현실이 된다.' },
                { name: '[인도자] 양석민', baseName: '양석민', rarity: 'SR', faction: '탐정', stats: { hp: 235, atk: 27, def: 21 }, imageUrl: 'https://placehold.co/300x500/22543d/ffffff?text=양석민', cardImageUrl: 'https://placehold.co/150x180/22543d/ffffff?text=양석민', dialogues: ['제가, 길을 보여드리죠.'], skills: [{ name: '최단 경로', dialogue: '진실로 가는 가장 빠른 길입니다.', power: 1.8, type: 'damage' }], deathDialogue: '여기까지... 안내하는 것이 제 역할...', story: '복잡하게 얽힌 사건 속에서 헤매는 동료들을 위해 가장 확실하고 빠른 길을 제시하는 길잡이. 그와 함께라면 길을 잃지 않는다.' },
                // ==================== 윤유준 ====================
                { name: '[학생] 윤유준', baseName: '윤유준', rarity: 'N', faction: '조수', stats: { hp: 65, atk: 5, def: 8 }, imageUrl: 'https://placehold.co/300x500/e53e3e/ffffff?text=윤유준', cardImageUrl: 'https://placehold.co/150x180/e53e3e/ffffff?text=윤유준', dialogues: ['어? 저건...'], skills: [{ name: '목격', dialogue: '제가 본 게 맞다면...', power: 1.1, type: 'damage' }], deathDialogue: '못 본 척... 했어야 했는데...', story: '호기심 많고 관찰력이 뛰어난 학생. 우연히 사건의 결정적인 순간을 목격하게 된다.' },
                { name: '[조수] 윤유준', baseName: '윤유준', rarity: 'R', faction: '조수', stats: { hp: 135, atk: 12, def: 15 }, imageUrl: 'https://placehold.co/300x500/c53030/ffffff?text=윤유준', cardImageUrl: 'https://placehold.co/150x180/c53030/ffffff?text=윤유준', dialogues: ['제가 봤어요. 확실해요.'], skills: [{ name: '증언', dialogue: '그날, 그 사람은 거기에 있었어요.', power: 1.4, type: 'damage' }], deathDialogue: '제가... 도움이 되었을까요?', story: '자신의 목격이 사건 해결에 중요한 단서가 된다는 것을 알고, 용기를 내어 탐정을 돕기 시작한다.' },
                { name: '[방관자] 윤유준', baseName: '윤유준', rarity: 'SR', faction: '조수', stats: { hp: 225, atk: 26, def: 23 }, imageUrl: 'https://placehold.co/300x500/742a2a/ffffff?text=윤유준', cardImageUrl: 'https://placehold.co/150x180/742a2a/ffffff?text=윤유준', dialogues: ['...저는 그저, 보고 있을 뿐입니다.'], skills: [{ name: '객관적 시선', dialogue: '감정은... 배제하는 편이 좋습니다.', power: 1.8, type: 'damage' }], deathDialogue: '결국... 아무것도 하지 못했군.', story: '사건의 추악한 진실과 마주한 후, 그는 한 걸음 물러나 모든 것을 지켜보기로 결심한다. 더 이상 섣불리 개입하지 않으리라 다짐하면서.' }
            ];
            
            const monsters = {
                '슬라임 킹': { name: '슬라임 킹', stats: { hp: 300, atk: 15, def: 10 }, imageUrl: 'https://placehold.co/300x300/a0aec0/ffffff?text=Slime+King' },
                '오크 대장': { name: '오크 대장', stats: { hp: 800, atk: 30, def: 20 }, imageUrl: 'https://placehold.co/300x300/63b3ed/ffffff?text=Orc+Chief' },
                '레드 드래곤': { name: '레드 드래곤', stats: { hp: 2000, atk: 50, def: 35 }, imageUrl: 'https://placehold.co/300x300/f56565/000000?text=Red+Dragon' },
                '그림자 암살자': { name: '그림자 암살자', stats: { hp: 1200, atk: 40, def: 15 }, imageUrl: 'https://placehold.co/300x300/4a5568/ffffff?text=Shadow' }
            };

            const mainChapters = [
                {
                    chapterName: "제1장: 비 내리는 밤의 서곡",
                    stages: [
                        { stageName: "1-1", monsterName: "슬라임 킹", rewards: { fountainPens: 5 } },
                        { stageName: "1-2", monsterName: "슬라임 킹", rewards: { fountainPens: 5 } },
                        { stageName: "1-3", monsterName: "슬라임 킹", rewards: { fountainPens: 6 } },
                        { stageName: "1-4", monsterName: "슬라임 킹", rewards: { fountainPens: 6 } },
                        { stageName: "1-5", monsterName: "슬라임 킹", rewards: { fountainPens: 7 } },
                        { stageName: "1-6", monsterName: "슬라임 킹", rewards: { fountainPens: 7 } },
                        { stageName: "1-7", monsterName: "슬라임 킹", rewards: { fountainPens: 8 } },
                        { stageName: "1-8", monsterName: "슬라임 킹", rewards: { fountainPens: 8 } },
                        { stageName: "1-9", monsterName: "슬라임 킹", rewards: { fountainPens: 9 } },
                        { stageName: "1-10", monsterName: "오크 대장", rewards: { fountainPens: 20, currency: 10 } } // 보스 스테이지
                    ]
                },
                {
                    chapterName: "제2장: 거짓된 알리바이",
                    stages: [
                        { stageName: "2-1", monsterName: "오크 대장", rewards: { fountainPens: 10 } },
                        { stageName: "2-2", monsterName: "오크 대장", rewards: { fountainPens: 10 } },
                        { stageName: "2-3", monsterName: "오크 대장", rewards: { fountainPens: 11 } },
                        { stageName: "2-4", monsterName: "오크 대장", rewards: { fountainPens: 11 } },
                        { stageName: "2-5", monsterName: "그림자 암살자", rewards: { fountainPens: 15 } },
                        { stageName: "2-6", monsterName: "그림자 암살자", rewards: { fountainPens: 15 } },
                        { stageName: "2-7", monsterName: "그림자 암살자", rewards: { fountainPens: 16 } },
                        { stageName: "2-8", monsterName: "그림자 암살자", rewards: { fountainPens: 16 } },
                        { stageName: "2-9", monsterName: "그림자 암살자", rewards: { fountainPens: 17 } },
                        { stageName: "2-10", monsterName: "레드 드래곤", rewards: { fountainPens: 50, currency: 30 } } // 보스 스테이지
                    ]
                }
                // 여기에 3장, 4장 등을 계속 추가할 수 있습니다.
            ];
            
            const eventDungeons = [
                { name: '1장', monsterName: '슬라임 킹', eventPointReward: 100 },
                { name: '2장', monsterName: '슬라임 킹', eventPointReward: 120 },
                { name: '3장', monsterName: '오크 대장', eventPointReward: 150 },
                { name: '4장', monsterName: '오크 대장', eventPointReward: 180 },
                { name: '5장', monsterName: '그림자 암살자', eventPointReward: 220 },
                { name: '6장', monsterName: '그림자 암살자', eventPointReward: 250 },
                { name: '7장', monsterName: '그림자 암살자', eventPointReward: 300 },
                { name: '8장', monsterName: '레드 드래곤', eventPointReward: 350 },
                { name: '9장', monsterName: '레드 드래곤', eventPointReward: 400 },
                { name: '10장', monsterName: '레드 드래곤', eventPointReward: 500 }
            ];

            const eventStories = [
                { title: '사건의 발단', content: `어느 날, 탐정 사무소에 한 통의 편지가 도착한다...` },
                { title: '사라진 그림자', content: `편지의 발신인을 찾아간 곳은 텅 비어있었다...` },
                { title: '첫 번째 증인', content: `사건의 유일한 목격자는 겁에 질려 있었다...` },
                { title: '거짓된 알리바이', content: `용의자의 알리바이는 너무나도 완벽했다...` },
                { title: '어둠 속의 계약', content: `사건의 배후에는 거대한 조직이 있었다...` },
                { title: '두 번째 피해자', content: `범인의 경고에도 수사를 계속하자, 새로운 희생자가 발생했다...` },
                { title: '숨겨진 단서', content: `피해자가 남긴 다잉 메시지. 그 의미는 과연...` },
                { title: '함정', content: `모든 단서가 한 곳을 가리키고 있었다. 하지만 그것은 함정이었다...` },
                { title: '배신자의 얼굴', content: `가장 믿었던 동료가 범인이었다니...` },
                { title: '진실의 이면', content: `모든 사건의 배후에는 예상치 못한 인물이 있었다...` }
            ];

            const eventShopItems = [
                { id: 'event_ssr_card', name: '[이벤트] 어둠의 계약자', type: 'card', cost: 10000, limit: 1, itemData: characters.find(c => c.name === '[이벤트] 어둠의 계약자') },
                { id: 'gems_100', name: '보석 100개', type: 'currency', cost: 1000, limit: 5, itemData: 100 },
                { id: 'gems_500', name: '보석 500개', type: 'currency', cost: 4500, limit: 2, itemData: 500 }
            ];


            const mainStories = [
                {
                    title: '프롤로그: 비 내리는 밤',
                    dungeonToUnlock: null,
                    content: [
                        { character: '서도진', expression: 'angry', position: 'left', dialogue: '젠장, 이럴 때가 아닌데...' },
                        { character: null, dialogue: '스스로에게 짜증을 내며 펜을 고쳐 쥐는 순간이었다. 쿵, 쿵, 쿵. 낡은 현관문이 둔탁하게 울렸다.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '서 작가, 오랜만이군. 혹시... 박민준하고 연락 닿았나?' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '아니, 그 녀석은 마감 때면 동굴로 들어가는 놈이잖아. 왜?' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '오늘 밤, 박민준이 죽었어.' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '...' }
                    ]
                },
                {
                    title: '1장: 첫 번째 사건',
                    dungeonToUnlock: '초보자의 숲',
                    content: [
                        { character: null, dialogue: '박민준의 작업실은... 기묘했다. 마치 누군가 연출이라도 한 것처럼, 모든 것이 지나치게 깔끔했다.' },
                        { character: null, dialogue: '흩어진 원고들, 쓰러진 잉크병, 심지어는 바닥에 그어진 핏자국까지도 마치 정교하게 계산된 소품처럼 보였다.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '자살로 종결될 것 같군. 유서도 발견됐고, 외부 침입의 흔적도 없으니.' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '아니, 이건 자살이 아니야. 이건... 메시지야.' },
                        { character: null, dialogue: '그의 눈이 작업실 한구석, 박민준이 아끼던 한정판 만년필 케이스에 멈췄다. 케이스는 비어 있었다.' },
                        { character: '서도진', expression: 'neutral', position: 'left', dialogue: '박민준은 왼손잡이였어. 하지만 바닥에 떨어진 펜은 오른손잡이용이야.' },
                        { character: '도천영', expression: 'neutral', position: 'right', dialogue: '그리고 그가 마지막으로 집필하던 원고의 제목은, \'완벽한 자살\'이라...' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '이건 자살로 위장된 타살이야. 범인은 박민준의 소설을 모방해서 현장을 꾸민거고.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '좋아. 경찰이 안 움직인다면, 우리가 직접 움직이면 되지. 나와 함께 이 소설의 결말을 확인해 보겠나?' }
                    ]
                },
                {
                    title: '2장: 어둠 속의 조력자',
                    dungeonToUnlock: '오크 점령지',
                    content: [
                        { character: null, dialogue: '수사는 난항에 부딪혔다. 용의선상은 넓었고, 범인이 남긴 단서는 교묘하게 조작된 것들뿐이었다.' },
                        { character: '서도진', expression: 'neutral', position: 'left', dialogue: '막다른 길이군...' },
                        { character: null, dialogue: '그때, 의문의 전화 한 통이 걸려왔다. 자신을 \'의사\'라고만 밝힌 목소리는 박민준의 시신에서 특수한 성분이 검출되었다는 정보를 흘렸다.' },
                        { character: null, dialogue: '그리고 그 성분을 만들 수 있는 사람은 극소수라는 말과 함께 낡은 연구소의 주소를 남기고는 전화를 끊었다.' },
                        { character: '도천영', expression: 'neutral', position: 'right', dialogue: '반신반의하며 찾아간 연구소는 폐허나 다름없군.' },
                        { character: null, dialogue: '하지만 그곳에서 두 사람은 뜻밖의 인물과 마주친다. 윤서천. 한때 촉망받는 화학자였으나, 비윤리적인 실험으로 학계에서 퇴출된 남자였다.' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '당신이 왜 여기에...?' }
                    ]
                },
                {
                    title: '3장: 마지막 퍼즐',
                    dungeonToUnlock: '용의 둥지',
                    content: [
                        { character: '서도진', expression: 'neutral', position: 'left', dialogue: '계속해서 위화감이 느껴져. 현장에서 발견된 단서들, 의사의 제보, 윤서천의 알리바이까지...' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '모든 것이 너무나도 완벽하게 맞아떨어지는 게 오히려 부자연스러워. 마치 잘 짜인 각본처럼.' },
                        { character: null, dialogue: '그 순간, 도천영에게서 전화가 걸려왔다. 박민준의 유서 필적이, 그의 담당 편집자였던 윤필규의 필적과 상당 부분 일치한다는 감정 결과가 나왔다는 것이다.' },
                        { character: '도천영', expression: 'serious', position: 'right', dialogue: '윤필규... 언제나 묵묵히 두 사람의 뒤에서 작품을 도왔던 남자. 그는 언제나 조용했고, 눈에 띄지 않았지.' },
                        { character: '서도진', expression: 'surprised', position: 'left', dialogue: '하지만 그랬기에, 모두를 속일 수 있었던 건가...!' },
                        { character: '서도진', expression: 'serious', position: 'left', dialogue: '이 비극적인 소설의 진정한 작가는, 바로 가장 가까이에 있었던 그였어.' },
                        { character: null, dialogue: '이제 남은 것은 마지막 장을 넘기는 것뿐이었다. 진실이라는 이름의, 잔혹한 결말을.' }
                    ]
                }
            ];

            // --- 업적 데이터 ---
            const achievements = [
                { id: 'ach_001', title: '첫걸음', description: '누군가의 서고에서 1회 뽑기', condition: (state) => state.stats.totalPulls >= 1, reward: { currency: 10 } },
                { id: 'ach_002', title: '수집의 시작', description: '누군가의 서고에서 10회 뽑기', condition: (state) => state.stats.totalPulls >= 10, reward: { currency: 50 } },
                { id: 'ach_003', title: '인연의 실', description: '등장인물 10종류 수집', condition: (state) => new Set(state.inventory.map(c => c.name)).size >= 10, reward: { currency: 50 } },
                { id: 'ach_004', title: '탐정의 자질', description: 'SSR 등급 등장인물 획득', condition: (state) => state.inventory.some(c => c.rarity === 'SSR'), reward: { currency: 100 } },
                { id: 'ach_005', title: '첫 번째 장', description: "'제1장: 비 내리는 밤의 서곡' 모두 클리어", condition: (state) => state.clearedStages.includes('1-10'), reward: { bookmarks: 5 } },
                { id: 'ach_006', title: '넓어진 서재', description: '보관함 1회 확장', condition: (state) => state.capacity > 100, reward: { currency: 30 } },
            ];
			
			// --- 인연(Synergy) 데이터 ---
            const synergies = [
                {
                    name: '탐정과 조수',
                    description: '덱 전체 HP +10%',
                    condition: (deck) => deck.some(c => c.faction === '탐정') && deck.some(c => c.faction === '조수'),
                    applyBonus: (card) => { card.stats.hp = Math.floor(card.stats.hp * 1.10); }
                },
                {
                    name: '쫓는 자와 쫓기는 자',
                    description: '덱 전체 ATK +10%',
                    condition: (deck) => deck.some(c => c.faction === '탐정') && deck.some(c => c.faction === '범인'),
                    applyBonus: (card) => { card.stats.atk = Math.floor(card.stats.atk * 1.10); }
                },
                {
                    name: '편집자와 소설가',
                    description: '서도진 & 윤필규 ATK +15',
                    condition: (deck) => deck.some(c => c.baseName === '서도진') && deck.some(c => c.baseName === '윤필규'),
                    applyBonus: (card) => { if (card.baseName === '서도진' || card.baseName === '윤필규') card.stats.atk += 15; }
                },
                {
                    name: '우애 나쁜 형제',
                    description: '윤필규 & 윤서천 DEF +15',
                    condition: (deck) => deck.some(c => c.baseName === '윤필규') && deck.some(c => c.baseName === '윤서천'),
                    applyBonus: (card) => { if (card.baseName === '윤필규' || card.baseName === '윤서천') card.stats.def += 15; }
                },
                {
                    name: '저 없으면 안 되죠?',
                    description: '서도진 & 한 현 HP +20%',
                    condition: (deck) => deck.some(c => c.baseName === '서도진') && deck.some(c => c.baseName === '한 현'),
                    applyBonus: (card) => { if (card.baseName === '서도진' || card.baseName === '한 현') card.stats.hp = Math.floor(card.stats.hp * 1.20); }
                },
                {
                    name: '눈앞에서 사람이 떨어졌다',
                    description: '윤서천 & 도천영 ATK +12%',
                    condition: (deck) => deck.some(c => c.baseName === '윤서천') && deck.some(c => c.baseName === '도천영'),
                    applyBonus: (card) => { if (card.baseName === '윤서천' || card.baseName === '도천영') card.stats.atk = Math.floor(card.stats.atk * 1.12); }
                },
                {
                    name: '목숨줄을 붙잡고 계시니까요',
                    description: '독고유진 & 양석민 DEF +20%',
                    condition: (deck) => deck.some(c => c.baseName === '독고유진') && deck.some(c => c.baseName === '양석민'),
                    applyBonus: (card) => { if (card.baseName === '독고유진' || card.baseName === '양석민') card.stats.def = Math.floor(card.stats.def * 1.20); }
                },
                {
                    name: '너무 티나는 짝사랑',
                    description: '박연우 & 강은율 HP/DEF +10%',
                    condition: (deck) => deck.some(c => c.baseName === '박연우') && deck.some(c => c.baseName === '강은율'),
                    applyBonus: (card) => {
                        if (card.baseName === '박연우' || card.baseName === '강은율') {
                            card.stats.hp = Math.floor(card.stats.hp * 1.10);
                            card.stats.def = Math.floor(card.stats.def * 1.10);
                        }
                    }
                }
            ];
			
			// --- 캐릭터 표정 이미지 데이터 ---
            const characterPortraits = {
                '서도진': {
                    neutral: 'https://i.imgur.com/9AoLI6I.png',
                    surprised: 'https://i.imgur.com/IayOWqf.png',
                    angry: 'https://i.imgur.com/ERUGX0P.png',
                },
                '도천영': {
                    neutral: 'https://i.imgur.com/svV5WKn.png',
                    serious: 'https://i.imgur.com/HlApnIL.png',
                },
                // 여기에 다른 캐릭터와 표정도 추가할 수 있습니다.
            };
			
			const rarityProbabilities = { 'SSR': 3, 'SR': 12, 'R': 35, 'N': 50 };
            const eventRarityProbabilities = { 'SSR': 6, 'SR': 14, 'R': 30, 'N': 50 };
            const EVENT_CHARACTER_NAME = '[악몽] 서도진';
            const EVENT_START_DATE = new Date('2025-10-14T00:00:00');
            const EVENT_END_DATE = new Date('2025-10-24T23:59:59');
			const enhancementCosts = [10, 20, 35, 55, 80, 110, 150, 200, 250]; // +1강 ~ +9강에 필요한 만년필 비용



