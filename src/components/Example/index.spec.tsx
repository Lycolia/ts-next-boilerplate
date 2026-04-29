import { screen, render, fireEvent } from '@testing-library/react';
import { Example } from '.';

describe('Example', () => {
  it('render', () => {
    const testProps: React.ComponentProps<typeof Example> = {
      text: 'aaa',
      bgColor: 'red',
      onClick: jest.fn()
    };
    render(<Example {...testProps} />);
    const el = screen.getByText(testProps.text);

    fireEvent.click(el);

    expect(el).toHaveTextContent(testProps.text);
    expect(el).toHaveClass('red');
    expect(testProps.onClick).toHaveBeenCalled();
  });
});
