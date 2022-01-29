import { render, fireEvent } from '@testing-library/react';

import PostInputForm from './PostInputForm';

describe('PostInputForm', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderPostInputForm = () => render((
    <PostInputForm
      onChangeInput={handleChange}
    />
  ));

  it('changes input value to call onChange event', () => {
    const { getByLabelText } = renderPostInputForm();

    const value = '';

    expect(getByLabelText('가게 이름').value).toBe(value);

    fireEvent.change(getByLabelText('가게 이름'), {
      target: { value: '멘카야' },
    })

    expect(handleChange).toBeCalled();
  });
});
