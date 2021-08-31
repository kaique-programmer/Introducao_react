import { render, screen } from "@testing-library/react";
import { PostCard } from '.';
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getAllByAltText(/title one/)).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title one one' })).toBeInTheDocument();
    expect(screen.getByText('body one')).toBeInTheDocument();    
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  })
});