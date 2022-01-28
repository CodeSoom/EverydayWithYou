import styled from '@emotion/styled';

const InputBox = styled.div({
  display: 'flex',
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
        htmlFor='name'>
        가게 이름
      </label>
      <input
        id='name'
        type='text'
        onChange={handleChange}
      />
    </InputBox>
  )
}
