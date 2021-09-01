import { Posts } from '.';

import { render, screen } from '@testing-library/react';

const props = {
  posts: [
    {
      id: 1,
      title: 'tiltle one',
      body: 'body one',
      cover: 'img/img1.png',
    },
    {
      id: 2,
      title: 'tiltle two',
      body: 'body two',
      cover: 'img/img2.png',
    },
  ]
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts { ...props } />);

    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText('body', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title two/i })).toHaveAttribute('src', 'img/img2.png');  
  });

  it('should match snapshot', () => {
    const {container} = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});