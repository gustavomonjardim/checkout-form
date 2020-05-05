import { setupWorker, rest } from 'msw';

const worker = setupWorker(
  rest.post('https://api.com/pagar', (req, res, ctx) =>
    res(ctx.delay(3000), ctx.status(200), ctx.json({ res: 'teste' }))
  )
);

worker.start();
