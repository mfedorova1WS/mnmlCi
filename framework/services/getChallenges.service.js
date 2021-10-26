import supertest from 'supertest';
import {urls} from "../config";

const GetChallenges = function () {
    this.get = async function () {
        const r = await supertest(urls.apichallenges).get('/challenges');
        return r;
    }
};

export { GetChallenges };
