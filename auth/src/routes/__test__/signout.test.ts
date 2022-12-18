import request from 'supertest';
import { app } from '../../app';

it('clears cookie after signing up', async () => {
    await request(app).post('/api/users/signup').send({ email: 'test@test.com', password: 'password' }).expect(201);

    const response = await request(app).post('/api/users/signout').send({}).expect(200);

    //console.log(response.get('Set-Cookie'));
    expect(response.get('Set-Cookie')).toBeDefined();
})