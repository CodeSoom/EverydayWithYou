import styled from '@emotion/styled';

const InputBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '12px 0',
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

// {onChangeInput}는 전역적으로 사용할 수 있는 함수인가?
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
