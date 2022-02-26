import styled from '@emotion/styled';

const InputBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '24px',
  '& label': {
    marginRight: '12px',
  },
  '& input': {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #fff',
    color: '#fff',
  },
});

export default function PostInputForm({ onChangeInput }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChangeInput({ value });
  }

  return (
    <InputBox>
      <label
        htmlFor='restaurantName'>
        가게 이름
      </label>
      <input
        id='restaurantName'
        type='text'
        onChange={handleChange}
      />
    </InputBox>
  )
}
