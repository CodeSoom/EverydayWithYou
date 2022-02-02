import { render, fireEvent } from '@testing-library/react';

import PostCategoryTagsForm from './PostCategoryTagsForm';

describe('PostCategoryTagsForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderPostCategoryTagsForm = () => render((
    <PostCategoryTagsForm
      onClickTag={handleClick}
    />
  ));

  // ToDo 조건문에 대한 테스트 추가
  it('renders category tags to call onClick event with id', () => {
    const categories = { id: 1, name: '면' };

    const { getByText } = renderPostCategoryTagsForm();

    expect(getByText('#면')).toBeInTheDocument();

    fireEvent.click(getByText('#면'));

    expect(handleClick).toBeCalledWith(categories.id);
  });
});
