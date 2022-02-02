import { render, fireEvent } from '@testing-library/react';

import PostConditionTagsForm from './PostConditionTagsForm';

describe('PostConditionTagsForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderPostConditionTagsForm = () => render((
    <PostConditionTagsForm
      onClickTag={handleClick}
    />
  ));

  // ToDo 조건문에 대한 테스트 추가
  it('renders condition tags to call onClick event with id', () => {
    const conditions = { id: 1, name: '혼밥' };

    const { getByText } = renderPostConditionTagsForm();

    expect(getByText('#혼밥')).toBeInTheDocument();

    fireEvent.click(getByText('#혼밥'));

    expect(handleClick).toBeCalledWith(conditions.id);
  });
});
