import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // TODO: API 호출하여 실제 로그인 처리
      // const response = await loginApi(data);

      // 임시 로그인 처리
      login({ email: data.email });
      navigate('/'); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <h2>로그인</h2>
        <InputGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '올바른 이메일 형식이 아닙니다',
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: '비밀번호는 8자 이상의 영문과 숫자 조합이어야 합니다',
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputGroup>
        <LoginButton type="submit">로그인</LoginButton>
        <Links>
          <a href="/signup">회원가입</a>
          <a href="/forgot-password">비밀번호 찾기</a>
        </Links>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  a {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.p`
  color: #ff3333;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

export default Login;
