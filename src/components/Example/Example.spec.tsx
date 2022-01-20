import { screen, render } from '@testing-library/react';
import { Example } from './Example';

describe('Example', () => {
  it('render', () => {
    const testProps: React.ComponentProps<typeof Example> = {
      text: 'aaa',
      bgColor: 'red',
      onClick: jest.fn,
    };
    render(<Example {...testProps} />);
    const el = screen.getByText(testProps.text);
    // fireEvent does not work spy with toBeCalled in SWC
    //fireEvent.click(el);

    expect(el).toHaveTextContent(testProps.text);
    expect(el).toHaveClass('red');
    // fireEvent does not work spy with toBeCalled in SWC
    //expect(testProps.onClick).toBeCalled();
  });
});
