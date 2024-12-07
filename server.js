const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.get('/search', async (req, res) => {
    const query = req.query.query; // 클라이언트에서 보낸 검색어
    try {
        const response = await axios.get('https://openapi.naver.com/v1/search/local.json', {
            params: {
                query,
                display: 5,
                start: 1,
                sort: 'random'
            },
            headers: {
                'X-Naver-Client-Id': '2il85btNfU6KvdvFEPYu',
                'X-Naver-Client-Secret': 'y4iSS_jPQq'
            }
        });
        res.json(response.data); // 결과를 클라이언트로 반환
    } catch (error) {
        console.error(error);
        res.status(500).send('API 요청 중 오류가 발생했습니다.');
    }
});

// 서버 실행
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
