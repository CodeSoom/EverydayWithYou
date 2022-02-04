import { render, fireEvent } from '@testing-library/react';

import PostRegionTagsForm from './PostRegionTagsForm';

describe('PostRegionTagsForm', () => {
  const handleClick = jest.fn();
  const selectedRegion = { color: 'blue', id: 1, name: "서울 송파구" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderPostRegionTagsForm = () => render((
    <PostRegionTagsForm
      onClickTag={handleClick}
      selectedRegion={selectedRegion}
    />
  ));

  it('renders region tags to call onClick event with id', () => {
    const regions = { id: 1, name: '서울 송파구' };

    const { getByText } = renderPostRegionTagsForm();

    expect(getByText('#서울 송파구')).toBeInTheDocument();

    fireEvent.click(getByText('#서울 송파구'));

    expect(handleClick).toBeCalledWith(regions.id);
  });
});
