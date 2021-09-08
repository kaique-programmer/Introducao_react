import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'title one',
        body: 'body one',
        url: 'img1.jpg'
      },
      {
        userId: 2,
        id: 2,
        title: 'title two',
        body: 'body two',
        url: 'img2.jpg'
      }
    ]))
  })
]

const server = setupServer(...handlers);

describe('<Home />', () => {

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => {
    server.close();
  });

  it('should render searc, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('not exist posts');

    await waitForElementToBeRemoved(noMorePosts);
    screen.debug();
  });
});