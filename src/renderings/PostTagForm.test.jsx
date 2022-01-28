import { render } from '@testing-library/react';

import PostTagForm from './PostTagForm';

describe('PostTagForm', () => {
  const renderPostTagForm = () => render((
    <PostTagForm
    />
  ));

  it('renders hash tag buttons', () => {
    const { getByText } = renderPostTagForm();

    expect(getByText('#혼밥')).toBeInTheDocument();
    expect(getByText('#서울 송파구')).toBeInTheDocument();
    expect(getByText('#면')).toBeInTheDocument();
  });
});
