import styled from "styled-components";
import { useRef } from "react";
import { LinkDefaultStyle } from "./MainPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let emailRef: any = useRef();
  let passwordRef: any = useRef();
  const navigate = useNavigate();

  function handleLoginForm(event: any) {
    event.preventDefault();

    let emailValue = emailRef.current.value;
    let passwordValue = passwordRef.current.value;

    if (!emailValue || !passwordValue) {
      alert("이메일이나 비밀번호를 입력해주세요.");
    } else {
      axios
        .post("http://localhost:5000/api/users/login", {
          email: emailValue,
          password: passwordValue,
        })
        .then((res) => {
          // console.log(res.data.token);
          console.log(res.data);
          navigate("/shoeshop/");
        })
        .catch((error) => {
          console.log(`Login Error : ${error}`);
        });
    }
  }

  return (
    <FormContainer>
      <FormStyle>
        <input type='text' placeholder='email' ref={emailRef} />
        <input type='password' placeholder='password' ref={passwordRef} />
        <button onClick={handleLoginForm}>로그인</button>
        <div>
          <span>{`아직 계정이 없으신가요?`} </span>
          <LinkDefaultStyle to='/shoeshop/signup'>회원가입하기</LinkDefaultStyle>
        </div>
      </FormStyle>
      <div>
        <p>email : admin@naver.com</p>
        <p>password : admin</p>
      </div>
    </FormContainer>
  );
}

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: calc(100vh - 9rem);

  p {
    font-size: 1.2rem;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 18px 10px;

  > input {
    width: 100%;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    outline: none;
    &:focus {
      border-bottom: 2px solid var(--black);
    }
  }
  > button {
    margin: 1rem;
    padding: 8px 16px;
    background-color: var(--black);
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  > div {
    margin: 1rem 0;
  }
`;
