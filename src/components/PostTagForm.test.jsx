import { render, fireEvent } from '@testing-library/react';

import PostTagForm from './PostTagForm';

describe('PostTagForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderPostTagForm = () => render((
    <PostTagForm
      onClickTag={handleClick}
    />
  ));

  it('renders hash tag buttons', () => {
    const { getByText } = renderPostTagForm();

    expect(getByText('#혼밥')).toBeInTheDocument();
    expect(getByText('#서울 송파구')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
  });

  it('calls onClick event', () => {
    const { getByText } = renderPostTagForm();

    fireEvent.click(getByText('#혼밥'));

    expect(handleClick).toBeCalled();

    // ToDo Refactoring
    expect(getByText('#서울 송파구')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
  });
});
