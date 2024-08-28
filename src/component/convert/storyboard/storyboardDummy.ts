import { Cut, Storyboard } from "../../../types/storyboard";


export const sb1: Storyboard = {
	"scene":[
		{
			"sceneNum":1,
			"summary":"요약",
			"location":"길 위",
			// "time":"낮",
			"content":[
				{
					"cutImage":"https://plotter-bucket-2024.s3.ap-northeast-2.amazonaws.com/image/816c5f84-62f8-11ef-93ce-0242ac110002_scene1_cut1.png",
					"cutNum":1,
					"text":"어느 틈에 아이가 땅 위에서 늘 놀던 동리의 위를 넘어 지나서 아름다운 꽃이 피어 어우러진 꽃밭에 벌써 이르렀습니다.\n아이: 착한 아이가 죽으면 천사가 날아와서, 이렇게 하여 하느님의 사랑을 받는 꽃은 소리를 치며 기껍게 노래를 부릅니다."
				},
				{
					"cutImage":"https://plotter-bucket-2024.s3.ap-northeast-2.amazonaws.com/image/816c5f84-62f8-11ef-93ce-0242ac110002_scene1_cut2.png",
					"cutNum":2,
					"text":"정성스럽게 뽑아 넣었습니다.\n이웃집아이: 어느 꽃을 뽑아다가 하늘에 갖다 심을까?"
				}
			]
		},
		{
			"sceneNum":2,
			"summary":"요약글2222",
			"location":"장소222",
			// "time":"낮",
			"content":[
				{
					"cutImage":"https://plotter-bucket-2024.s3.ap-northeast-2.amazonaws.com/image/816c5f84-62f8-11ef-93ce-0242ac110002_scene1_cut1.png",
					"cutNum":1,
					"text":"어느 틈에 아이가 땅 위에서 늘 놀던 동리의 위를 넘어 지나서 아름다운 꽃이 피어 어우러진 꽃밭에 벌써 이르렀습니다.\n아이: 착한 아이가 죽으면 천사가 날아와서, 이렇게 하여 하느님의 사랑을 받는 꽃은 소리를 치며 기껍게 노래를 부릅니다."
				},
				{
					"cutImage":"https://plotter-bucket-2024.s3.ap-northeast-2.amazonaws.com/image/816c5f84-62f8-11ef-93ce-0242ac110002_scene1_cut2.png",
					"cutNum":2,
					"text":"정성스럽게 뽑아 넣었습니다.\n이웃집아이: 어느 꽃을 뽑아다가 하늘에 갖다 심을까?"
				}
			]
		}
	]
};



// dummy data (스토리보드 객체)
export const cuts: Cut[] = [
	{
		cutNum: 1,
		// angleCam: 'wide shot',
		text: '모니터 화면에 붉은 여우 한 마리가 이리저리 움직이고 있다.',
		cutImage: 'link',
	},
	{
		cutNum: 2,
		// angleCam: 'bust shot',
		text:
			'화면이 움직이자 여우 사육사가 나타난다. 여우사육사: 제가 보기엔 괜찮은데, 어떠세요?',
		cutImage: 'link',
	},
	{
		cutNum: 3,
		// angleCam: 'close up',
		text: '소원: 그러네요. 근데, 여기선 뒷발이 좀 부자연스러웠거든요.',
		cutImage: 'link',
	},
];

export const storyboardInfo = {
	sceneNum: 1,
	location: '청주 동물원 - 소원의 집',
	// time: '해가 지기 직전',
	summary: '다른 동물원에 보낸 동물들을 걱정하는 소원.',
	cutCount: cuts.length,
};
