import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/login.module.scss';
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
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h2>로그인</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            이메일
          </label>
          <input
            className={styles.input}
            id="email"
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '올바른 이메일 형식이 아닙니다',
              },
            })}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            비밀번호
          </label>
          <input
            className={styles.input}
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
            <p className={styles.errorMessage}>{errors.password.message}</p>
          )}
        </div>
        <button className={styles.loginButton} type="submit">
          로그인
        </button>
        <div className={styles.links}>
          <a href="/signup">회원가입</a>
          <a href="/forgot-password">비밀번호 찾기</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
