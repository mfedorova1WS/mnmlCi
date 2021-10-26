import { GetChallenges } from '../framework/services/getChallenges.service';

describe ('Это описание теста', () =>{
    test('Получить список заданий', async () => {
        const {status} = await new GetChallenges().get();
        expect(status).toBe(200);
    });
    }
)
